const DATA_PATH = "./data/";

export async function loadJSON(fileName) {
  try {
    const response = await fetch(`${DATA_PATH}${fileName}.json`);

    if (!response.ok) {
      throw new Error(`Failed to load ${fileName}: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
