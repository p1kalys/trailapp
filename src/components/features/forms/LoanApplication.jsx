import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { Button } from "antd";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  MapPin,
  Shield,
  User,
} from "lucide-react";

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
import { createApplication } from "../../../services/FormService";
import toast from "react-hot-toast";

export default function LoanApplication() {
  const [submitting, setSubmitting] = useState(false);
  const [cardTransition, setCardTransition] = useState("");
  const steps = useMemo(
    () => [
      {
        key: "personal",
        icon: User,
        label: "Personal Information",
        schema: personalSchema,
      },
      {
        key: "employment",
        icon: MapPin,
        label: "Address & Employment",
        schema: employmentSchema,
      },
      {
        key: "financial",
        icon: CreditCard,
        label: "Financial Details",
        schema: financialSchema,
      },
      {
        key: "security",
        icon: Shield,
        label: "Account Security",
        schema: securitySchema,
      },
    ],
    []
  );

  const initialStore = useMemo(
    () => ({
      personal: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        ssn: "",
      },
      employment: {
        streetAddress: "",
        city: "",
        state: "",
        zipcode: "",
        employmentStatus: "",
      },
      financial: {
        annualIncomeRange: "",
        creditScoreRange: "",
        bankingRelationship: "",
      },
      security: {
        password: "",
        confirm: "",
        termsAccepted: false,
        privacyAccepted: false,
        marketingOptIn: false,
      },
    }),
    []
  );

  const [store, setStore] = useState(initialStore);
  const [errors, setErrors] = useState({
    personal: {},
    employment: {},
    financial: {},
    security: {},
  });
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(-1);

  const active = steps[current];

  const setStepValues = (stepKey, updater) => {
    setStore((prev) => ({
      ...prev,
      [stepKey]:
        typeof updater === "function" ? updater(prev[stepKey]) : updater,
    }));
  };

  const setStepErrorMap = (stepKey, map) =>
    setErrors((prev) => ({ ...prev, [stepKey]: map || {} }));

  const handleNext = async () => {
    setCardTransition("slide-left");
    setTimeout(async () => {
      const stepKey = active.key;
      const errs = await validateWithYup(active.schema, store[stepKey]);
      setStepErrorMap(stepKey, errs);
      if (Object.keys(errs).length) {
        setCardTransition("");
        return;
      }
      setCompleted(Math.max(completed, current));
      setCurrent((c) => Math.min(c + 1, steps.length - 1));
      setCardTransition("");
    }, 300);
  };

  const handlePrev = () => {
    setCardTransition("slide-right");
    setTimeout(() => {
      setCurrent((c) => Math.max(c - 1, 0));
      setCardTransition("");
    }, 300);
  };

  const validateAllSteps = async () => {
    for (const s of steps) {
      const errs = await validateWithYup(s.schema, store[s.key]);
      setStepErrorMap(s.key, errs);
      if (Object.keys(errs).length) return { stepKey: s.key, errs };
    }
    return null;
  };
  const handleSubmitAll = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const currentKey = active.key;
      const currentErrs = await validateWithYup(
        active.schema,
        store[currentKey]
      );
      setStepErrorMap(currentKey, currentErrs);
      if (Object.keys(currentErrs).length) return;

      const firstFail = await validateAllSteps();
      if (firstFail) {
        setCurrent(steps.findIndex((s) => s.key === firstFail.stepKey));
        return;
      }

      const payload = { ...store };
      const saved = await createApplication(payload);
      console.log("Saved:", saved);
      toast.success("Application submitted successfully!");

      setCurrent(0);
      setCompleted(-1);
      setStore(initialStore);
      setErrors({
        personal: {},
        employment: {},
        financial: {},
        security: {},
      });
    } catch (err) {
      console.error("Submit failed:", err);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const incomeOptions = [
    "Below $10,000",
    "$10,000–$25,000",
    "$25,000–$50,000",
    "$50,000–$100,000",
    "$100,000–$250,000",
    "Above $250,000",
  ];
  const creditOptions = [
    "Poor (300–579)",
    "Fair (580–669)",
    "Good (670–739)",
    "Very Good (740–799)",
    "Excellent (800–850)",
  ];
  const bankOptions = [
    "SBI",
    "HDFC",
    "ICICI",
    "Axis Bank",
    "Kotak",
    "Bank of Baroda",
    "Other",
  ];

  return (
    <Box className="mx-auto max-w-3xl p-4 font-century-regular text-left">
      <StepBar
        steps={steps}
        current={current}
        completed={completed}
        className="mb-5"
      />

      <CardShell
        className={`mx-auto w-[680px] h-[620px] font-century-regular text-left overflow-hidden transition-all duration-300 ${
          cardTransition === "slide-left"
            ? "animate-slide-left"
            : cardTransition === "slide-right"
            ? "animate-slide-right"
            : ""
        }`}
      >
        <PanelHeader active={active} />
        <div className="px-5 py-4 font-century-regular text-left h-[400px] overflow-y-auto">
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

        <div className="flex items-center justify-between px-5 py-4 gap-4 font-century-regular text-left">
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
            className="hover:scale-[1.1] font-century-regular text-left"
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
              className="hover:scale-[1.1] font-century-regular text-left"
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
              className="hover:scale-[1.1] font-century-regular text-left"
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>
      </CardShell>
    </Box>
  );
}
