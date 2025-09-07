import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { Button } from "antd";
import { ArrowLeft, ArrowRight, CreditCard, MapPin, Shield, User } from "lucide-react";

import PersonalStep from "./steps/PersonalStep";
import EmploymentStep from "./steps/EmploymentStep";
import FinancialStep from "./steps/FinancialStep";
import SecurityStep from "./steps/SecurityStep";

import { validateWithYup } from "../../../utils/Helper";
import {
  employmentSchema,
  financialSchema,
  personalSchema,
  securitySchema,
} from "../../../utils/validation/FormValidation";
import CardShell from "../../common/CardShell";
import StepBar from "./StepBar";
import PanelHeader from "../../common/PanelHeader";
// import { createApplication } from "../../../services/applications"; // enable if using json-server

export default function LoanApplication() {
  const steps = useMemo(
    () => [
      { key: "personal", icon: User, label: "Personal Information", schema: personalSchema },
      { key: "employment", icon: MapPin, label: "Address & Employment", schema: employmentSchema },
      { key: "financial", icon: CreditCard, label: "Financial Details", schema: financialSchema },
      { key: "security", icon: Shield, label: "Account Security", schema: securitySchema },
    ],
    []
  );

  const initialStore = useMemo(
    () => ({
      personal: { firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "", ssn: "" },
      employment: { streetAddress: "", city: "", state: "", zipcode: "", employmentStatus: "" },
      financial: { annualIncomeRange: "", creditScoreRange: "", bankingRelationship: "" },
      security: { password: "", confirm: "", termsAccepted: false, privacyAccepted: false, marketingOptIn: false },
    }),
    []
  );

  const [store, setStore] = useState(initialStore);
  const [errors, setErrors] = useState({ personal: {}, employment: {}, financial: {}, security: {} });
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(-1);

  const active = steps[current];

  const setStepValues = (stepKey, updater) => {
    setStore((prev) => ({
      ...prev,
      [stepKey]: typeof updater === "function" ? updater(prev[stepKey]) : updater,
    }));
  };

  const setStepErrorMap = (stepKey, map) => setErrors((prev) => ({ ...prev, [stepKey]: map || {} }));

  const handleNext = async () => {
    const stepKey = active.key;
    const errs = await validateWithYup(active.schema, store[stepKey]);
    setStepErrorMap(stepKey, errs);
    if (Object.keys(errs).length) return;
    setCompleted(Math.max(completed, current));
    setCurrent((c) => Math.min(c + 1, steps.length - 1));
  };

  const handlePrev = () => setCurrent((c) => Math.max(c - 1, 0));

  const handleSubmitAll = async () => {
    // validate active
    const currentKey = active.key;
    const currentErrs = await validateWithYup(active.schema, store[currentKey]);
    setStepErrorMap(currentKey, currentErrs);
    if (Object.keys(currentErrs).length) return;

    // validate all
    for (const s of steps) {
      const e = await validateWithYup(s.schema, store[s.key]);
      if (Object.keys(e).length) {
        setStepErrorMap(s.key, e);
        setCurrent(steps.indexOf(s));
        return;
      }
    }

    const payload = { ...store };
    // If using json-server:
    // const saved = await createApplication(payload);
    // console.log("Saved:", saved);
    console.log("Submitting aggregated payload:", payload);
    alert("Submitted! Check console for payload.");
  };

  // dropdown options
  const incomeOptions = ["Below $10,000","$10,000–$25,000","$25,000–$50,000","$50,000–$100,000","$100,000–$250,000","Above $250,000"];
  const creditOptions = ["Poor (300–579)","Fair (580–669)","Good (670–739)","Very Good (740–799)","Excellent (800–850)"];
  const bankOptions = ["SBI","HDFC","ICICI","Axis Bank","Kotak","Bank of Baroda","Other"];

  return (
    <Box className="mx-auto max-w-3xl p-4">
      <StepBar steps={steps} current={current} completed={completed} className="mb-5" />

      <CardShell>
        <PanelHeader active={active} />
        <div className="px-5 py-4">
          {active.key === "personal" && (
            <PersonalStep
              values={store.personal}
              errors={errors.personal}
              setValues={(updater) => setStepValues("personal", updater)}
            />
          )}
          {active.key === "employment" && (
            <EmploymentStep
              values={store.employment}
              errors={errors.employment}
              setValues={(updater) => setStepValues("employment", updater)}
            />
          )}
          {active.key === "financial" && (
            <FinancialStep
              values={store.financial}
              errors={errors.financial}
              setValues={(updater) => setStepValues("financial", updater)}
              incomeOptions={incomeOptions}
              creditOptions={creditOptions}
              bankOptions={bankOptions}
            />
          )}
          {active.key === "security" && (
            <SecurityStep
              values={store.security}
              errors={errors.security}
              setValues={(updater) => setStepValues("security", updater)}
            />
          )}
        </div>

        <div className="flex items-center justify-between px-5 py-4 gap-4">
          <Button
            onClick={handlePrev}
            disabled={current === 0}
            icon={<ArrowLeft size={16} />}
            style={{
              background: "white",
              color: "#434142",
              borderColor: "rgba(0,0,0,0.08)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
            className="hover:scale-[1.1]"
          >
            Previous
          </Button>

          <div className="flex-1" />

          {current < steps.length - 1 ? (
            <Button
              type="primary"
              onClick={handleNext}
              icon={<ArrowRight size={16} />}
              iconPosition="end"
              style={{
                background: "#CEFF66",
                borderColor: "#CEFF66",
                color: "#0a0a0a",
                boxShadow: "0 4px 12px rgba(206,255,102,0.45)",
              }}
              className="hover:scale-[1.1]"
            >
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={handleSubmitAll}
              style={{
                background: "#2F395C",
                borderColor: "#2F395C",
                color: "#ffffff",
                boxShadow: "0 4px 12px rgba(47,57,92,0.35)",
              }}
              className="hover:scale-[1.1]"
            >
              Submit
            </Button>
          )}
        </div>
      </CardShell>
    </Box>
  );
}
