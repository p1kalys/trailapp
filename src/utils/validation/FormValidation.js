import * as yup from "yup";

const phoneRegex = /^[0-9()+\-\s]*$/;

const personalSchema = yup.object({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .matches(phoneRegex, "Invalid phone")
    .min(10, "Too short")
    .max(10, "Too long"),
  dateOfBirth: yup
    .date()
    .typeError("Enter a valid date")
    .max(new Date(), "Date of birth cannot be in the future")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "You must be at least 18 years old"
    )
    .required("Date of birth is required"),
  ssn: yup
    .string()
    .trim()
    .matches(/^\d{9}$/, "SSN must be exactly 9 digits")
    .required("Social Security Number is required"),
});

const employmentSchema = yup.object({
  streetAddress: yup.string().trim().required("Street address is required"),
  city: yup.string().trim().required("City is required"),
  state: yup.string().trim().required("State is required"),
  zipcode: yup
    .string()
    .trim()
    .matches(/^\d{6}(-\d{4})?$/, "Enter a valid ZIP code")
    .required("ZIP code is required"),
  employmentStatus: yup
    .string()
    .oneOf(["Employed", "Unemployed"], "Select a valid employment status")
    .required("Employment status is required"),
});

const financialSchema = yup.object({
  annualIncomeRange: yup
    .string()
    .oneOf(
      [
        "Below $10,000",
        "$10,000–$25,000",
        "$25,000–$50,000",
        "$50,000–$100,000",
        "$100,000–$250,000",
        "Above $250,000",
      ],
      "Select a valid income range"
    )
    .required("Annual income range is required"),
  creditScoreRange: yup
    .string()
    .oneOf(
      [
        "Poor (300–579)",
        "Fair (580–669)",
        "Good (670–739)",
        "Very Good (740–799)",
        "Excellent (800–850)",
      ],
      "Select a valid credit score range"
    )
    .required("Credit score range is required"),
  bankingRelationship: yup
    .string()
    .oneOf(
      ["SBI", "HDFC", "ICICI", "Axis Bank", "Kotak", "Bank of Baroda", "Other"],
      "Select a valid bank"
    )
    .required("Banking relationship is required"),
});

const securitySchema = yup.object({
  password: yup
    .string()
    .min(8, "At least 8 characters")
    .required("Password is required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
  termsAccepted: yup
    .boolean()
    .oneOf([true], "You must accept the Terms and Conditions")
    .required(),
  privacyAccepted: yup
    .boolean()
    .oneOf([true], "You must accept the Privacy Policy")
    .required(),
    marketingOptIn: yup
    .boolean()
    .optional(),
});

export { personalSchema, employmentSchema, financialSchema, securitySchema };
