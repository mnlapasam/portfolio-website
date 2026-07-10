# Md Nayeem Lapasam — Portfolio Website

A complete Next.js portfolio project ready for GitHub and Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize before publishing

1. Replace `public/photo.png` with your own professional photo. Keep the filename `photo.png`.
2. Put your resume in `public/resume.pdf`.
3. Open `lib/data.ts` and change:
   - `email`
   - `linkedin`
   - `github`
   - `resumeUrl` to `/resume.pdf`
4. Update any job descriptions, dates, certificates, or project text in `lib/data.ts`.
5. After Vercel gives you a domain, replace `https://example.com` in:
   - `app/robots.ts`
   - `app/sitemap.ts`

## Deploy through GitHub and Vercel

1. Create a new empty GitHub repository.
2. Upload every file and folder from this project to that repository.
3. In Vercel, choose **Add New → Project**.
4. Import your GitHub repository.
5. Keep the detected framework as **Next.js**.
6. Click **Deploy**.

Vercel will provide a free `vercel.app` address after deployment.
