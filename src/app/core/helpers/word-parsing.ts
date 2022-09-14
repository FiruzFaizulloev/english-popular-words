var texts = ``;

const textArray = texts.split('\n');

export function getWords(): any[] {
  return textArray.map((item: any, index: number) => {
    const findWordIndex = item.indexOf('[');
    const findTranscriptIndex = item.indexOf(']');
    const findTranslateIndex = item.indexOf('—');
    return {
      id: index,
      word: item.substring(0, findWordIndex).trim(),
      transcript: item.substring(findWordIndex, findTranscriptIndex + 1).trim(),
      translate: item.substring(findTranslateIndex + 1).trim()
    }
  });
}
