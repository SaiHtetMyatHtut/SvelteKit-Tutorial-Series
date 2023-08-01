# SvelteKit Tutorial By Sai Htet Myat Htut
## SvelteKit + TailwindCSS + TypeScript Setup

> Before you start, make sure you have the latest version of Node.js installed.
> ဒီ Tutorial မစခင်မှာ Node.js သွင်းထားဖို့လိုမယ်။ ဘယ်လိုသွင်းရမလဲ ကတော့ Youtube ကြည့် :3
> ဒီနေရာမှာ Commandline လေးလဲ နည်းနည်းတော့ သိထားဖို့ လိုမယ်၊ မသိထားဘူးဆိုလဲ cd, npm, npx, ls, mkdir ,rm စတဲ့ Command တွေကို သုံးပြီး လေ့လာဖို့လိုမယ်။

### 1. Create a new SvelteKit project
> Open Terminal and run the following command to create a new SvelteKit project.
> Terminal ကိုဖွင်းပြီး ကို Project ဆောက်စေချင်တဲ့ နေရာမှာ အောက် က Command ကို run။

``` npm create svelte@latest [Your Project Name] ```

SvelteKit Project တစ်ခါဆောက်တိုင်းမှာ အခု Command က Run ကို Run ရမှာ ဆိုတော့ ခါ ဒါလေး ကို မှတ်မိသည်ရှိ အောင် ပြန်လုပ်ထားရင် တော့ပို ကောင်းမယ်နောက် ပိုင်းမှာ။ 

### 2. Install TailwindCSS
> Open Terminal and run the following command to install TailwindCSS.
> Tailwind ကို သွင်းဖို့ က ဒီ အောက် က သူလိုအပ်တဲ့ Packages သွင်းရမယ် နောက်ပိုင်းမှာ ကိုသုံးချင်တဲ့ တခြားသူတွေရဲ့ Packages တွေသွင်းမယ်ဆိုလဲ​ဒီလိုပဲ​သွင်းရမှာပဲ။
``` npm install -D tailwindcss@latest postcss@latest autoprefixer@latest ```
### 3. Create TailwindCSS config file

> Run the following command to create TailwindCSS config file. This will create `tailwind.config.js` and `postcss.config.js` files in your project's root folder.
> ဒါကတော့ သူလိုအပ်တဲ့ File လေး တွေကို Initiate လုပ် တာပေါ့ အကြမ်းဖြင်းပြောရရင် `postcss.config.js` နဲ့ `tailwind.config.js` ဆိုတဲ့ ဖိုင်တွေကို သူပါသူဆောက်ပေးလိမ့်မယ် အဲ့တော့ က ပျင်းလို့ မ Run ချင်ရင်တော့ ကို့ပါကို ဆောက် :3

``` npx tailwindcss init -p ```

### 4. Configure TailwindCSS
> Copy ကူးတဲ့ အပိုင်းကတော့ မပြောတော့ဘူး ဒါပေးမယ် အဲ့ ထဲက Code တွေက တော့ Content မှာ ရေးထားတဲ့ `['./src/**/*.{html,js,svelte,ts}']` ဆိုတာ အခု tailwindcss ကို အဲ့ Folder အောက်ထဲ က အဲ့ file type တွေပေါ်မှာ အကျိုး သက်ရောက်စေချင်တယ်ဆိုတာမျိုးကို ပြောတာ ဒီမှာ တစ်ခု ရှိတာ က အကယ်၍ ကို က တခြား နောက် တပ် Libries တစ်ခုခု နဲ့ တွဲ သုံးချင်တဲ့ အခါ ချိန် ခဲ့ တာမျိုးတွေလုပ်လို့ရတယ်။ အောက် က Theme နဲ့ Plugin ကတော့ Tailwind မှာ Custom Theme ဒါမှ မဟုတ် Custom Transactions Config တွေလုပ်ချင်တယ်ဆိုရင် လာကလိရမယ် နေရာတွေလို့ပဲ မှတ်ထားစေချင်တယ် ဒီမှာတော့။ Plugins က လဲ အဲ့တိုင်းပဲ နောက်ပိုင်းမှာ ကျွန်တော်တို့ က တွဲ သုံးမယ် ဟာတွေရှိရင် သုံးလို့ရတယ် ဥပမာ Typograph, tailwind forms auto prefixer လိုမျိုးတွေပေါ့ သိချင်ရင်တော့ သွားရှာကြည့်ထားလဲ မမှားပါဘူး။
Open `tailwind.config.js` and add the following code :
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```

> ဒါက ကြတော့ ကျွန်တော် တို့ SvelteKit Project မှာ ကျွန်တော် တို့ က PreProcessing ဆိုတာ ကိုသုံးချင်တယ် အဲ့တာ က ဘာလဲဆိုရင် ကျွန်တော်တို့ Tailwindcss ကို ရေးနေတဲ့ အချိန် မှာ သူက Tailwind Code တွေကို Vite Runtime က Website တိုက်ရိုက် Changes တွေလုပ်တဲ့အခါ အဆင် ပြေ အောင်ကြိုပြီး ပြင်ဆင်ထားပေးဖို့ အတွက်ပါ။

Open `svelte.config.js` and add the following code :
```
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;
```
### 5. Add TailwindCSS styles to your project
> ဒီမှာက ကြတော့ Tailwindcss ရဲ့ ပုံစံအရ သူ့ရဲ့ `@tailwind base;` tailwindcss နဲ့ ရိုးရိုး css ချိတ်ထားတာကိုလာထဲ့ ထားတာ အဲ့တော့မှာ ကျွန်တောတို့ တို့က tailwind code တွေ ရေးထဲ့ အခါ သူ က css ကို ပြန်ပြောင်းပေးနိုင်မယ် သဘော ပေါ့။ ဥပမာ - `w-screen` လို ရေးလိုက်တာ က `width: 100vw;` ဆိုတာ ကို ချိတ် ပေးတဲ့ သဘော။ `@tailwind components;` ဆိုတာ ကြတော့ သူထဲမှာ tailwind ရဲ့ ပါပြီးသား Components တွေရှိတယ် အဲ့တာတွေကိုလာချိတ်ပေးထားပါ  ဒါကိုတော့ နောက်ပိုင်းကြရင် ဆက်ပြောပြမယ်။ `@tailwind utilities;` ဆိုတာ ကတော့ tailwind သူ့ထဲ့မှာ ကျွန်တော်တို့ အတွက် အရောင်တွေ `text-red-500` ဆိုတာ မျိုးတွေ နောက် များကြီးပေါ့ ဒါတွေကိုချိန် ပေးတာ ပါ။ ဒါ တွေ ကသိထားတာတော့ပိုကောင်းပေမယ် တကယ် တမ်းမှာတော့အများကြီးပြင်ဖို့ မလို လှဘူး။
Create a file named app.css in the src folder and add the following code :
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 6. Import and Start Using TailwindCSS
Before we go any further, I will create a +layout.svelte file in the src/routes folder, basically a layout file that will be used by all the pages in our project. You can create a layout file in any folder you want, but I prefer to create it in the src/routes folder. And we will import the app.css file in the layout file. Now You can use TailwindCSS everywhere in your project.
```
<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
</script>
<slot/>
```