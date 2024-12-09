import OpenAI from 'openai';
import { OPEN_AIKEY } from './Constants';

const openai = new OpenAI({
  apiKey: OPEN_AIKEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;