import alfy from 'alfy';

export const LANG_MAP = {
  ZH: 'ZH',
  EN: 'EN',
};

export const LANG_MAP_GOOGLE = {
  ZH: 'zh-CN',
  EN: 'en',
};

export function isChinese(str) {
  var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;

  return reg.test(str);
}

export async function translate(text) {
  const host = process.env.host || 'http://localhost:1188';
  const token = process.env.token;
  const showAlternatives = process.env.showAlternatives !== 'false';
  const isChineseToEnglish = isChinese(text);

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const data = await alfy.fetch(`${host}/translate`, {
    method: 'POST',
    body: JSON.stringify({
      text,
      source_lang: isChineseToEnglish ? LANG_MAP.ZH : LANG_MAP.EN,
      target_lang: isChineseToEnglish ? LANG_MAP.EN : LANG_MAP.ZH,
    }),
    headers,
  });



  if (!data || data.code !== 200 || !data.data) {
    throw new Error('Error, please check your translate server.');
  }

  if (!showAlternatives) {
    delete data.alternatives;
  }

  return data;
}

export function generateGoogleTranslateUrl(text, targetLang) {
  return `https://translate.google.com/?sl=auto&tl=${LANG_MAP_GOOGLE[targetLang]}&text=${encodeURIComponent(text)}&op=translate`;
}
