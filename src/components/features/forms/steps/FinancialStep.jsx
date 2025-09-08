import { Form, Row, Col, Select } from "antd";

export default function FinancialStep({
  values,
  errors,
  setValues,
  incomeOptions,
  creditOptions,
  bankOptions,
}) {
  const v = values;
  const e = errors || {};

  return (
    <Form layout="vertical">
      <Col xs={24} sm={8}>
        <Form.Item
          label="Annual Income *"
          validateStatus={e.annualIncomeRange ? "error" : ""}
          help={e.annualIncomeRange}
        >
          <Select
            placeholder="Select"
            className="w-full shadow border-none"
            value={v.annualIncomeRange}
            onChange={(val) =>
              setValues((p) => ({ ...p, annualIncomeRange: val }))
            }
            options={incomeOptions.map((opt) => ({ value: opt, label: opt }))}
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={8}>
        <Form.Item
          label="Credit Score Range *"
          validateStatus={e.creditScoreRange ? "error" : ""}
          help={e.creditScoreRange}
        >
          <Select
            placeholder="Select"
            className="w-full shadow border-none"
            value={v.creditScoreRange}
            onChange={(val) =>
              setValues((p) => ({ ...p, creditScoreRange: val }))
            }
            options={creditOptions.map((opt) => ({ value: opt, label: opt }))}
          />
        </Form.Item>
      </Col>

      <Col xs={24} sm={8}>
        <Form.Item
          label="Banking Relationship *"
          validateStatus={e.bankingRelationship ? "error" : ""}
          help={e.bankingRelationship}
        >
          <Select
            placeholder="Select"
            className="w-full shadow border-none"
            value={v.bankingRelationship}
            onChange={(val) =>
              setValues((p) => ({ ...p, bankingRelationship: val }))
            }
            options={bankOptions.map((opt) => ({ value: opt, label: opt }))}
          />
        </Form.Item>
      </Col>
    </Form>
  );
}
