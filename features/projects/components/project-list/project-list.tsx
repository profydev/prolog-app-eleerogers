import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { LoadingSpinner } from "@features/ui";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={styles.list} data-testid="project-list">
      {data?.map((project) => (
        <li data-cy="project" key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
