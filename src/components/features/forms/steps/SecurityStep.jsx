import { Form, Input, Row, Col, Checkbox, Typography } from "antd";

const { Link: AntLink, Text } = Typography;

export default function SecurityStep({ values, errors, setValues }) {
  const v = values;
  const e = errors || {};

  return (
    <Form layout="vertical" className="text-left font-century-regular">
      <Row gutter={[4, 4]}>
        <Col span={24}>
          <Form.Item
            className="font-century-regular text-left"
            label="Password *"
            validateStatus={e.password ? "error" : ""}
            help={e.password}
          >
            <Input.Password
              value={v.password}
              className="w-full shadow border-none font-century-regular text-left"
              onChange={(ev) =>
                setValues((p) => ({ ...p, password: ev.target.value }))
              }
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            className="font-century-regular text-left"
            label="Confirm Password *"
            validateStatus={e.confirm ? "error" : ""}
            help={e.confirm}
          >
            <Input.Password
              value={v.confirm}
              className="w-full shadow border-none font-century-regular text-left"
              onChange={(ev) =>
                setValues((p) => ({ ...p, confirm: ev.target.value }))
              }
            />
          </Form.Item>
        </Col>

        <Col span={28}>
          <Form.Item
            className="font-century-regular text-left"
            validateStatus={e.termsAccepted ? "error" : ""}
            help={e.termsAccepted}
          >
            <Checkbox
              checked={Boolean(v.termsAccepted)}
              className="font-century-regular text-left"
              onChange={(ev) =>
                setValues((p) => ({ ...p, termsAccepted: ev.target.checked }))
              }
            >
              <Text className="font-century-regular text-left">
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
            className="font-century-regular text-left"
            validateStatus={e.privacyAccepted ? "error" : ""}
            help={e.privacyAccepted}
          >
            <Checkbox
              checked={Boolean(v.privacyAccepted)}
              className="font-century-regular text-left"
              onChange={(ev) =>
                setValues((p) => ({ ...p, privacyAccepted: ev.target.checked }))
              }
            >
              <Text className="font-century-regular text-left">
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
          <Form.Item className="font-century-regular text-left">
            <Checkbox
              checked={Boolean(v.marketingOptIn)}
              className="font-century-regular text-left"
              onChange={(ev) =>
                setValues((p) => ({ ...p, marketingOptIn: ev.target.checked }))
              }
            >
              <span className="font-century-regular text-left">
                I would like to receive marketing communications about loan
                products and financial services.
              </span>
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
