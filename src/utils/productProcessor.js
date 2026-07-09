const colorKeywords = {
  black: ['black', 'negro', 'oscuro', 'dark'],
  white: ['white', 'blanco', 'crema'],
  blue: ['blue', 'azul', 'denim', 'jean'],
  red: ['red', 'rojo', 'wine', 'crimson'],
  gray: ['gray', 'grey', 'gris', 'charcoal'],
  brown: ['brown', 'marron', 'tan', 'beige', 'bronze'],
  green: ['green', 'verde', 'olive', 'army'],
  purple: ['purple', 'purpura', 'violet'],
  pink: ['pink', 'rosa', 'magenta'],
  yellow: ['yellow', 'amarillo', 'gold', 'dorado'],
  orange: ['orange', 'naranja'],
  multicolor: ['multicolor', 'multi', 'pattern', 'print', 'striped', 'floral'],
};

function extractColor(description) {
  const lowerDesc = description.toLowerCase();
  for (const [color, keywords] of Object.entries(colorKeywords)) {
    if (keywords.some((keyword) => lowerDesc.includes(keyword))) {
      return color;
    }
  }
  return 'multicolor';
}

function getGenderLabel(category) {
  if (category === "men's clothing") return 'Hombre';
  if (category === "women's clothing") return 'Mujer';
  return 'Unisex';
}

function translateDescription(title, category) {
  const translations = {
    cotton: 'algodon',
    polyester: 'poliester',
    blend: 'mezcla',
    slim: 'ajustado',
    fit: 'corte',
    casual: 'casual',
    formal: 'formal',
    comfort: 'comodidad',
    quality: 'calidad',
    material: 'material',
    sleeve: 'manga',
    long: 'larga',
    short: 'corta',
    'v-neck': 'cuello en v',
    crew: 'redondo',
    collar: 'cuello',
    button: 'botones',
    pocket: 'bolsillos',
    zip: 'cierre',
    perfect: 'perfecto',
    every: 'cada',
    occasion: 'ocasion',
    style: 'estilo',
    comfortable: 'comodo',
    wear: 'usar',
    wearing: 'usando',
  };

  let translated = title;
  for (const [english, spanish] of Object.entries(translations)) {
    const regex = new RegExp(`\\b${english}\\b`, 'gi');
    translated = translated.replace(regex, spanish);
  }

  return translated;
}

export function processProducts(apiProducts) {
  return apiProducts.map((product) => ({
    ...product,
    gender: getGenderLabel(product.category),
    genderFilter: product.category === "men's clothing" ? 'hombre' : 'mujer',
    color: extractColor(product.description),
    translatedDescription: translateDescription(product.description, product.category),
  }));
}
