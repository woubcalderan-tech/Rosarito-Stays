import { Info } from "lucide-react";
import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import type { ContactPageConfig } from "../config/property";

const emptyValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
type FieldName = keyof typeof emptyValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const fields: readonly {
  name: FieldName;
  label: string;
  required?: true;
  maxLength?: number;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
}[] = [
  {
    name: "name",
    label: "Full Name",
    required: true,
    maxLength: 100,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email Address",
    required: true,
    maxLength: 254,
    type: "email",
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Phone Number (optional)",
    maxLength: 40,
    type: "tel",
    autoComplete: "tel",
  },
  { name: "subject", label: "Subject", required: true },
  { name: "message", label: "Message", required: true, maxLength: 2000 },
];

const requiredMessages: Record<Exclude<FieldName, "phone">, string> = {
  name: "Enter a name.",
  email: "Enter an email address.",
  subject: "Select a subject.",
  message: "Enter a message with some text.",
};

function validate(
  values: typeof emptyValues,
  subjects: ContactPageConfig["form"]["subjects"],
): FieldErrors {
  const errors: FieldErrors = {};
  for (const { name, required, maxLength } of fields) {
    const text = values[name].trim();
    if (name !== "phone" && required && !text)
      errors[name] = requiredMessages[name];
    else if (maxLength && text.length > maxLength) {
      errors[name] = `Use ${maxLength} characters or fewer.`;
    }
  }
  if (
    !errors.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = "Enter a valid email address, such as guest@example.com.";
  }
  if (!errors.subject && !subjects.some(({ id }) => id === values.subject)) {
    errors.subject = "Select a subject from the list.";
  }
  return errors;
}

export function ContactForm({ copy }: { copy: ContactPageConfig["form"] }) {
  const id = useId();
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const confirmation = useRef<HTMLParagraphElement>(null);

  function update(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function focusField(name: FieldName) {
    requestAnimationFrame(() =>
      document.getElementById(`${id}-${name}`)?.focus(),
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, copy.subjects);
    setErrors(nextErrors);
    const firstError = fields.find(({ name }) => nextErrors[name]);
    if (firstError) {
      focusField(firstError.name);
      return;
    }

    setValues(emptyValues);
    setSubmitted(true);
    requestAnimationFrame(() => confirmation.current?.focus());
  }

  return (
    <section className="contact-form-panel" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{copy.heading}</h2>
      <p>{copy.description}</p>
      {submitted ? (
        <div className="contact-form-result">
          <p ref={confirmation} role="status" tabIndex={-1}>
            {copy.confirmation}
          </p>
          <button
            type="button"
            className="action action--secondary"
            onClick={() => {
              setSubmitted(false);
              focusField("name");
            }}
          >
            {copy.resetLabel}
          </button>
        </div>
      ) : (
        <form noValidate onSubmit={submit} aria-labelledby={`${id}-heading`}>
          <p className="sr-only" role="status">
            {Object.values(errors).some(Boolean) &&
              "Review the fields marked with errors."}
          </p>
          <div className="contact-fields">
            {fields.map(
              ({
                name,
                label,
                required,
                maxLength,
                type = "text",
                autoComplete,
              }) => {
                const fieldId = `${id}-${name}`;
                const error = errors[name];
                // Values stay in React state. There are no named fields for a browser submission.
                const common = {
                  id: fieldId,
                  required,
                  value: values[name],
                  "aria-invalid": error ? true : undefined,
                  "aria-describedby": error ? `${fieldId}-error` : undefined,
                };
                return (
                  <div
                    key={name}
                    className="contact-field"
                    data-wide={name !== "name" && name !== "email"}
                  >
                    <label htmlFor={fieldId}>
                      {label}
                      {required && <span aria-hidden="true"> *</span>}
                    </label>
                    {name === "subject" ? (
                      <select
                        {...common}
                        onChange={(event) => update(name, event.target.value)}
                      >
                        <option value="">Select a subject</option>
                        {copy.subjects.map((subject) => (
                          <option key={subject.id} value={subject.id}>
                            {subject.label}
                          </option>
                        ))}
                      </select>
                    ) : name === "message" ? (
                      <textarea
                        {...common}
                        rows={4}
                        maxLength={maxLength}
                        onChange={(event) => update(name, event.target.value)}
                      />
                    ) : (
                      <input
                        {...common}
                        type={type}
                        autoComplete={autoComplete}
                        maxLength={maxLength}
                        onChange={(event) => update(name, event.target.value)}
                      />
                    )}
                    {error && (
                      <p
                        id={`${fieldId}-error`}
                        className="contact-field-error"
                      >
                        {error}
                      </p>
                    )}
                  </div>
                );
              },
            )}
          </div>
          <p className="contact-form-notice" id={`${id}-notice`}>
            <Info aria-hidden="true" /> {copy.notice}
          </p>
          <button
            type="submit"
            className="action action--primary contact-submit"
            aria-describedby={`${id}-notice`}
          >
            {copy.submitLabel}
          </button>
        </form>
      )}
    </section>
  );
}
