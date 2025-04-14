import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">varify your number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="Phone Number"
          required
          error={[]}
        />
        <FormInput
          type="Number"
          placeholder="Verification code"
          required
          error={[]}
        />
        <FormButton loading={false} text="Verify" />
      </form>
    </div>
  );
}
