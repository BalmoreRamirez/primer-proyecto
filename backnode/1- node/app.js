const datos = [
  {
    id: 1,
    title: "Jose",
    year: 28,
  },
  {
    id: 1,
    title: "Jose",
    year: 28,
  },
];

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};
async function fetchingData() {
  try {
    const dataFetched = await getDatos();
    console.log(dataFetched);
  } catch (error) {
    console.log(error);
  }
}
