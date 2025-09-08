import { Form, Input, Row, Col, Checkbox, Typography } from "antd";

const { Link: AntLink, Text } = Typography;

export default function SecurityStep({ values, errors, setValues }) {
  const v = values;
  const e = errors || {};

  return (
    <Form layout="vertical">
      <Row gutter={[4, 4]}>
        <Col span={24}>
          <Form.Item
            label="Password *"
            validateStatus={e.password ? "error" : ""}
            help={e.password}
          >
            <Input.Password
              value={v.password}
              className="w-full shadow border-none"
              onChange={(ev) =>
                setValues((p) => ({ ...p, password: ev.target.value }))
              }
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="Confirm Password *"
            validateStatus={e.confirm ? "error" : ""}
            help={e.confirm}
          >
            <Input.Password
              value={v.confirm}
              className="w-full shadow border-none"
              onChange={(ev) =>
                setValues((p) => ({ ...p, confirm: ev.target.value }))
              }
            />
          </Form.Item>
        </Col>

        <Col span={28}>
          <Form.Item
            validateStatus={e.termsAccepted ? "error" : ""}
            help={e.termsAccepted}
          >
            <Checkbox
              checked={Boolean(v.termsAccepted)}
              onChange={(ev) =>
                setValues((p) => ({ ...p, termsAccepted: ev.target.checked }))
              }
            >
              <Text>
                I agree to the{" "}
                <AntLink href="/terms" target="_blank" rel="noreferrer">
                  Terms and Conditions
                </AntLink>{" "}
                and acknowledge that I have read the loan disclosures. *
              </Text>
            </Checkbox>
          </Form.Item>
        </Col>

        <Col span={28}>
          <Form.Item
            validateStatus={e.privacyAccepted ? "error" : ""}
            help={e.privacyAccepted}
          >
            <Checkbox
              checked={Boolean(v.privacyAccepted)}
              onChange={(ev) =>
                setValues((p) => ({ ...p, privacyAccepted: ev.target.checked }))
              }
            >
              <Text>
                I agree to the{" "}
                <AntLink href="/privacy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </AntLink>{" "}
                and consent to the processing of my personal data. *
              </Text>
            </Checkbox>
          </Form.Item>
        </Col>

        <Col span={28}>
          <Form.Item>
            <Checkbox
              checked={Boolean(v.marketingOptIn)}
              onChange={(ev) =>
                setValues((p) => ({ ...p, marketingOptIn: ev.target.checked }))
              }
            >
              I would like to receive marketing communications about loan
              products and financial services.
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
