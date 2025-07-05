import Layout from "./components/layout/Layout";
import PatientCard from "./components/patients/PatientCard";

// TEST
const DESC = `Facere quod maiores molestias libero fugiat vitae blanditiis. Natus tempore dolorum debitis voluptatum. Illo adipisci praesentium suscipit magnam laboriosam delectus quaerat. Culpa recusandae minima praesentium libero iusto expedita.\nArchitecto illo nihil ut tempore ipsam quia soluta. Numquam in corrupti. Veniam dolore asperiores eligendi expedita ducimus eveniet. Ut dolor dolor sunt pariatur veritatis. Sapiente error culpa quis ut esse adipisci quod.\nRepellat tempora quia aliquam eligendi aspernatur magni. Repudiandae quos quam sequi id quam soluta quo animi. Beatae tempore natus aut iusto dolor eaque. Doloribus inventore ducimus eum facere reiciendis maiores. Beatae eveniet adipisci eligendi quidem odit veritatis numquam. Explicabo magnam ut sed aut facere consequatur unde consequuntur.`;

function App() {
  return (
    <Layout>
      <div className="flex h-full w-full flex-col overflow-hidden pb-12">
        <h1 className="mb-2 text-3xl font-bold lg:text-4xl">Patients</h1>
        <h2 className="mb-16 text-sm text-gray-500 lg:text-base">
          General overview of patients registered in the system.
        </h2>
        <section className="grid h-full w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 overflow-y-auto pr-3 pb-3">
          {new Array(20).fill("_").map((_, index) => (
            <PatientCard
              key={index}
              name="John Doe"
              avatar="./src/assets/images/profile.avif"
              website="#"
              description={DESC}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default App;
