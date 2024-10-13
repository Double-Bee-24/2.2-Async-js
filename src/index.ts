import fetch, { Response } from "node-fetch";

interface IResponse {
  ip: string;
}

interface IFullName {
  name: string;
}

interface IHuman {
  gender: string;
}
// const getApi = async (url: string): Promise<IResponse | undefined> => {
//   try {
//     const response = await fetch(url);

//     const data: IResponse = (await response.json()) as IResponse;
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// getApi("https://api.ipify.org?format=json");
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const getNames = async (): Promise<void> => {
//   try {
//     const requests = [
//       fetch("https://random-data-api.com/api/name/random_name"),
//       delay(5000).then(() =>
//         fetch("https://random-data-api.com/api/name/random_name")
//       ),
//       delay(10000).then(() =>
//         fetch("https://random-data-api.com/api/name/random_name")
//       ),
//     ];

//     const responses = await Promise.all(requests);

//     const names: IFullName[] = await Promise.all(
//       responses.map((response) => response.json() as Promise<IFullName>)
//     );

//     for (const fullName of names) {
//       console.log(fullName.name);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// getNames();

// const getNames2 = async (): Promise<string | undefined> => {
//   try {
//     const response: Response = await fetch(
//       "https://random-data-api.com/api/name/random_name"
//     );
//     const data: IFullName = (await response.json()) as IFullName;

//     return data.name;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getNames3 = (): Promise<IFullName> => {
//   return fetch("https://random-data-api.com/api/name/random_name").then(
//     (response) => response.json().then((result) => result as Promise<IFullName>)
//   );
// };

// const getThreeNames = (): Promise<void> => {
//   const threeNames: string[] = [];

//   return getNames3()
//     .then((result1) => {
//       threeNames.push(result1.name);
//       return delay(5000).then(() => getNames3());
//     })
//     .then((result2) => {
//       threeNames.push(result2.name);
//       return delay(5000).then(() => getNames3());
//     })
//     .then((result3) => {
//       threeNames.push(result3.name);
//       console.log(threeNames);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// getThreeNames();

// -------------------------------------- Task 4

// const tryToGetWoman = async (): Promise<IHuman | undefined> => {
//   try {
//     const response = await fetch(
//       "https://random-data-api.com/api/users/random_user"
//     );
//     const data: IHuman = (await response.json()) as IHuman;

//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const gender = "kvadrober";

// const waitForWoman = async (gender: string): Promise<void> => {
//   while (gender !== "Female") {
//     const human: IHuman | undefined = await tryToGetWoman();

//     if (human) {
//       gender = human.gender;
//       console.log(gender);
//     }
//     await delay(3000);
//   }
// };

// waitForWoman(gender);

// -----------------------------------------------------------------

// const tryToGetWoman2 = (): Promise<IHuman> => {
//   return fetch("https://random-data-api.com/api/users/random_user").then(
//     (result) => result.json() as Promise<IHuman>
//   );
// };

// const waitForWoman = (): void => {
//   tryToGetWoman2()
//     .then((result: IHuman) => {
//       console.log(result.gender);
//       if (result.gender === "Female") {
//         console.log("Found a woman!");
//       } else {
//         delay(3000).then(() => waitForWoman());
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// waitForWoman();

// ------------------------------------------------------- Task 5
// async function numbaOne(enazaFunction: (ip: string) => Promise<void>) {
//   await enazaFunction("unreal ip");
// }

// async function numbaTwo(ip: string): Promise<void> {
//   console.log(ip);
// }

// numbaOne(numbaTwo).then(() => {
//   console.log("success");
// });

// ------------------------------------------------------- Task 6
const findIp = async (): Promise<IResponse | undefined> => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data: IResponse = (await response.json()) as IResponse;

    return data;
  } catch (error) {
    console.error(error);
  }
};

const confusedFunction = async (
  showIp: (ip: string) => void
): Promise<void> => {
  try {
    const data: IResponse | undefined = await findIp();

    if (data) {
      const ip = data.ip;
      showIp(ip);
    }
  } catch (error) {
    console.error(error);
  }
};

const showIp = (ip: string): void => {
  console.log(ip);
};

confusedFunction(showIp);
