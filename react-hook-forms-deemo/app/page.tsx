import Image from "next/image";
import BasicForm from "./(components)/basic-form";
import RegisterFields from "./(components)/register-fields";
import ApplyValidations from "./(components)/apply-validations";
import Integration from "./(components)/integration";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <BasicForm />
      </main>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <RegisterFields />
      </main>{" "}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ApplyValidations />
      </main>{" "}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Integration />
      </main>
    </>
  );
}
