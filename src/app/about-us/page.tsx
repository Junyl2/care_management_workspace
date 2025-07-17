export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate real delay
  return <div>Test page with delay</div>;
}
