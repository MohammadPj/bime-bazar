import React, { ChangeEvent, FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { ITextFieldForm } from "../type";
import { InputAdornment } from "@mui/material";
import { deepMerge } from "@/helpers/methods/general";

type Props = ITextFieldForm & {
  form: UseFormReturn<any>;
  error: any;
};

export const p2e = (s: string) =>
  /^[0-9 | \u06F0-\u06F9\s][.\d | \u06F0-\u06F9\s]*(,\d+)?$/g.test(s);

export const checkIfNumber = (value: string) => {
  const charLength = value.length;

  return !charLength || p2e(value);
};

const UFTextField: FC<Props> = ({
  form,
  name,
  type = "text",
  defaultValue,
  label,
  rules,
  readonly,
  disabled,
  placeholder,
  error,
  itemProps,
  props,
  helperText,
  variant = "outlined",
  withoutHelperText,
  inputLabelMode,
  startIcon,
  endIcon,
}) => {
  const textFieldMergedProps = deepMerge(itemProps, props);

  const handleKeyDown = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: any,
  ) => {
    const value = e?.target?.value;
    onChange(value);

    // if (type === 'number' && !checkIfNumber(value)) {
    //   e.preventDefault();
    // } else {
    //   onChange(value);
    // }
  };

  const preventInvalidChars = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (
      type === "number" &&
      ["e", "E", "+", "-", "ArrowUp", "ArrowDown"].includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue || ""}
      render={({ field }) => (
        <TextField
          {...form?.register(name, {
            ...rules,
          })}
          {...(inputLabelMode === "static" && { hiddenLabel: true })}
          {...(inputLabelMode === "relative" && { label: label })}
          value={field.value}
          variant={variant}
          type={type}
          fullWidth
          id={name}
          error={!!error}
          placeholder={placeholder}
          onChange={(e) => handleKeyDown(e, field.onChange)}
          onKeyDown={preventInvalidChars}
          helperText={
            withoutHelperText ? undefined : error?.message ?? helperText ?? " "
          }
          aria-readonly={readonly}
          disabled={disabled}
          slotProps={{
            formHelperText: { style: { margin: "4px 0 0 0", fontSize: 14 } },
            input: {
              readOnly: readonly,
              startAdornment: startIcon ? (
                <InputAdornment position="start">{startIcon}</InputAdornment>
              ) : undefined,
              endAdornment: endIcon ? (
                <InputAdornment position="end">{endIcon}</InputAdornment>
              ) : undefined,
            },
          }}
          {...textFieldMergedProps}
        />
      )}
    />
  );
};

export default UFTextField;
