import dynamic from "next/dynamic";
import ProjectFormSekeleton from "./loading";

import { useRouter } from "next/navigation";

const ProjectForm = dynamic(
  () => import("../_component/ProjectForm"),
  {
    ssr: false,
    loading: () => <ProjectFormSekeleton />
  }
)

const NewPorjectPage = () => {
  return (
    <div>
      <ProjectForm />
    </div>
  );
};

export default NewPorjectPage;
