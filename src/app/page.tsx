
import JobList from "./componunt/JobList";
import JobFilterHeader from "./componunt/JobFilterHeader";

export default function Home() {
  return (
    <>
      <section>
        
        <JobFilterHeader />
      </section>
      <main className="p-6">
        <JobList  />
      </main>
    </>
  );
}
