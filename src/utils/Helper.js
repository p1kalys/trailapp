export const validateWithYup = async (schema, values) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {};
  } catch (err) {
    const out = {};
    if (err?.inner?.length) {
      err.inner.forEach((e) => {
        if (e.path && !out[e.path]) out[e.path] = e.message;
      });
    } else if (err?.path) {
      out[err.path] = err.message;
    }
    return out;
  }
}