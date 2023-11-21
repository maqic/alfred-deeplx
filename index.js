import alfy from 'alfy';
import { translate, LANG_MAP, generateGoogleTranslateUrl } from './utils.js';

const {
  data,
  alternatives,
  target_lang: targetLang,
} = await translate(alfy.input);

const reverseTranslate = process.env.reverseTranslate !== 'false';

const alternativesWithSubtitle = await Promise.all((alternatives || []).map(async el => {
  const data = reverseTranslate ? await translate(el).catch(() => null) : {
    data: alfy.input,
  };

  return {
    title: el,
    subtitle: data.data || alfy.input,
    arg: el,
  };
}));

const items = [
  {
    title: data,
    subtitle: alfy.input,
    arg: data,
  },
  ...alternativesWithSubtitle,
].map(el => {
  const pronunciation = targetLang === LANG_MAP.EN ? el.title : el.subtitle;
  const googleTranslateUrl = generateGoogleTranslateUrl(el.subtitle, targetLang);

  return {
    ...el,
    mods: {
      alt: {
        arg: googleTranslateUrl,
        subtitle: '🔍 查看 Google 翻译',
      },
      cmd: {
        arg: pronunciation,
        subtitle: `🔊 英文发音：${pronunciation}`,
      },
    },
  };
});

alfy.output(items);
