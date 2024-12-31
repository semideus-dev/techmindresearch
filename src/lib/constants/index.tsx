import Image from "next/image";

export const DashboardContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>
        Streamline operations and insights with an intuitive ERP dashboard
        designed for efficiency and clarity
      </h1>
      <Image src="/assets/mca.png" alt="Dashboard" width={1000} height={1000} />
    </div>
  );
};
