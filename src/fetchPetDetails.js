export default async function fetchPetDetails({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!res.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  //   const data = await res.json();
  //   return data;
  return res.json();
}
