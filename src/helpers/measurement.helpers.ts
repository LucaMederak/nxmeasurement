export const bmiHelper = (weight: number, height: number) => {
  const bmi = Math.round((weight / (height / 100) ** 2) * 1e2) / 1e2;
  return bmi;
};

export const bmiTypeHelper = (bmi: number) => {
  if (bmi <= 18.5) return "niedowaga";
  if (bmi > 18.5 && bmi <= 24.9) return "norma";
  if (bmi > 24.9 && bmi <= 29.9) return "nadwaga";
  if (bmi > 29.9) return "otyłość";
  return "brak";
};

export const ppmHelper = (
  sex: "mężczyzna" | "kobieta",
  weight: number,
  height: number,
  age: number
) => {
  if (sex == "mężczyzna") {
    const ppm_harris =
      Math.round((66.5 + 13.75 * weight + 5.003 * height - 6.775 * age) * 1e2) /
      1e2;
    const ppm_mifflin =
      Math.round((10 * weight + 6.25 * height - 5 * age + 5) * 1e2) / 1e2;
    return { ppm_harris, ppm_mifflin };
  } else if (sex == "kobieta") {
    const ppm_harris =
      Math.round((655.1 + 9.563 * weight + 1.85 * height - 4.676 * age) * 1e2) /
      1e2;
    const ppm_mifflin =
      Math.round((10 * weight + 6.25 * height - 5 * age - 161) * 1e2) / 1e2;
    return { ppm_harris, ppm_mifflin };
  }

  return { ppmHarris: 0, ppmMifflin: 0 };
};

export const cpmHelper = (ppmHarris: number, pal: number) => {
  return Math.round(ppmHarris * pal * 1e2) / 1e2;
};

// waist / Hip Ratio [eng] wskaźnik talia [cm] /biodra [cm] (pl)
export const WHRHelper = (waist?: number, hip?: number) => {
  if (!waist || !hip) {
    return 0;
  }
  const WHR = waist / hip;
  return Math.round(WHR * 1e2) / 1e2;
};

// waist to height ratio [eng] wskaźnik talia [cm] / wzrost [cm]  (pl)
export const WHtRHelper = (waist?: number, height?: number) => {
  if (!waist || !height) {
    return 0;
  }
  const WHtR = (waist / height) * 100;
  return Math.round(WHtR * 1e2) / 1e2;
};

//Procentowa zawartość tkanki tłuszczowej w organizmie
export const YMCAHelper = (
  waist?: number,
  weight?: number,
  sex?: "mężczyzna" | "kobieta"
) => {
  if (!waist || !weight || !sex) {
    return 0;
  }
  if (sex === "mężczyzna") {
    const YMCA =
      ((1.634 * waist - 0.1804 * weight - 98.42) / (2.2 * weight)) * 100;
    return Math.round(YMCA * 1e2) / 1e2;
  } else if (sex === "kobieta") {
    const YMCA =
      ((1.634 * waist - 0.1804 * weight - 76.76) / (2.2 * weight)) * 100;
    return Math.round(YMCA * 1e2) / 1e2;
  }
};

//Lean body mass LBM [eng] Beztłuszczowa masa ciała BMC
export const BMCHelper = (
  height?: number,
  weight?: number,
  sex?: "mężczyzna" | "kobieta"
) => {
  if (!sex || !weight || !height) {
    return 0;
  }
  if (sex === "mężczyzna") {
    const BMC = 1.1 * weight - 128 * ((weight / height) ^ 2);
    return Math.round(BMC * 1e2) / 1e2;
  } else if (sex === "kobieta") {
    const BMC = 1.07 * weight - 148 * ((weight / height) ^ 2);
    return Math.round(BMC * 1e2) / 1e2;
  }

  return 0;
};
