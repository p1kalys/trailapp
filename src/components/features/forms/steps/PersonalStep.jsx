import { Form, Input, Row, Col } from "antd";

export default function PersonalStep({ values, errors, setValues }) {
  const v = values;
  const e = errors || {};

  return (
    <Form layout="vertical">
      <Row gutter={[4, 4]}>
        <Col xs={24} sm={12}>
          <Form.Item label="First Name *" validateStatus={e.firstName ? "error" : ""} help={e.firstName}>
            <Input
              value={v.firstName}
              className="w-full shadow border-none"
              onChange={(ev) => setValues((p) => ({ ...p, firstName: ev.target.value }))}
              placeholder="John"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item label="Last Name *" validateStatus={e.lastName ? "error" : ""} help={e.lastName}>
            <Input
              value={v.lastName}
              className="w-full shadow border-none"
              onChange={(ev) => setValues((p) => ({ ...p, lastName: ev.target.value }))}
              placeholder="Doe"
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Email Address *" validateStatus={e.email ? "error" : ""} help={e.email}>
            <Input
              type="email"
              value={v.email}
              className="w-full shadow border-none"
              onChange={(ev) => setValues((p) => ({ ...p, email: ev.target.value }))}
              placeholder="name@example.com"
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Phone Number" validateStatus={e.phone ? "error" : ""} help={e.phone}>
            <Input
              value={v.phone}
              className="w-full shadow border-none"
              onChange={(ev) => setValues((p) => ({ ...p, phone: ev.target.value }))}
              placeholder="+91 98765 43210"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item label="Date of Birth *" validateStatus={e.dateOfBirth ? "error" : ""} help={e.dateOfBirth}>
            <Input
              type="date"
              value={v.dateOfBirth}
              className="w-full shadow border-none"
              onChange={(ev) => setValues((p) => ({ ...p, dateOfBirth: ev.target.value }))}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item label="Social Security Number *" validateStatus={e.ssn ? "error" : ""} help={e.ssn}>
            <Input
              value={v.ssn}
              className="w-full shadow border-none"
              onChange={(ev) => setValues((p) => ({ ...p, ssn: ev.target.value }))}
              placeholder="XXX-XX-XXXX"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
