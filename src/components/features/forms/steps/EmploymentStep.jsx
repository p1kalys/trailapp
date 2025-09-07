import { Form, Input, Row, Col, Select } from "antd";

export default function EmploymentStep({ values, errors, setValues }) {
  const v = values;
  const e = errors || {};

  return (
    <Form layout="vertical">
      <Row gutter={[4, 4]}>
        <Col span={24}>
          <Form.Item
            label="Street Address *"
            validateStatus={e.streetAddress ? "error" : ""}
            help={e.streetAddress}
          >
            <Input
              value={v.streetAddress}
              className="w-full shadow border-none"
              onChange={(ev) =>
                setValues((p) => ({ ...p, streetAddress: ev.target.value }))
              }
              placeholder="e.g., 123 Main St"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={8}>
          <Form.Item
            label="City *"
            validateStatus={e.city ? "error" : ""}
            help={e.city}
          >
            <Input
              value={v.city}
              className="w-full shadow border-none"
              onChange={(ev) =>
                setValues((p) => ({ ...p, city: ev.target.value }))
              }
              placeholder="City"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={8}>
          <Form.Item
            label="State *"
            validateStatus={e.state ? "error" : ""}
            help={e.state}
          >
            <Input
              value={v.state}
              className="w-full shadow border-none"
              onChange={(ev) =>
                setValues((p) => ({ ...p, state: ev.target.value }))
              }
              placeholder="TN"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={8}>
          <Form.Item
            label="ZIP Code *"
            validateStatus={e.zipcode ? "error" : ""}
            help={e.zipcode}
          >
            <Input
              value={v.zipcode}
              className="w-full shadow border-none"
              onChange={(ev) =>
                setValues((p) => ({ ...p, zipcode: ev.target.value }))
              }
              placeholder="560001"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={8}>
          <Form.Item
            label="Employment Status *"
            validateStatus={e.employmentStatus ? "error" : ""}
            help={e.employmentStatus}
          >
            <Select
              placeholder="Select"
              className="shadow border-none"
              value={v.employmentStatus}
              onChange={(val) =>
                setValues((p) => ({ ...p, employmentStatus: val }))
              }
              options={[
                { value: "Employed", label: "Employed" },
                { value: "Unemployed", label: "Unemployed" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
