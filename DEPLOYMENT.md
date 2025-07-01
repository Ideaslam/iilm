# Firebase Deployment Guide for IILM Tech Lab

## Quick Setup

Follow these steps to deploy your IILM Tech Lab website to Firebase Hosting:

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Initialize Firebase Project

Navigate to your project directory and run:

```bash
firebase init
```

Select the following options:
- **Features**: Choose "Hosting"
- **Project**: Create a new project or select existing one
- **Public directory**: Enter `.` (current directory)
- **Single-page app**: Choose `No`
- **GitHub integration**: Optional

### 4. Update .firebaserc

Create or update `.firebaserc` file with your project ID:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

### 5. Deploy to Firebase

```bash
firebase deploy
```

## Project Configuration

The project includes:

- `firebase.json` - Hosting configuration
- `.firebaserc` - Project settings
- `.gitignore` - Excludes Firebase cache and logs

## Firebase Console Setup

1. **Go to Firebase Console**: https://console.firebase.google.com
2. **Create New Project** or select existing
3. **Enable Hosting** in the project
4. **Optional**: Set up custom domain

## Custom Domain Setup

After deployment:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter your domain (e.g., `iilm-techlab.com`)
4. Follow DNS verification steps
5. Add DNS records to your domain provider

## Environment Variables

For production deployment, consider adding:

- Analytics tracking ID
- Contact form endpoint
- API keys (if needed)

## Performance Optimization

The site is already optimized with:

- ✅ Minified CSS and JS
- ✅ Optimized images
- ✅ Caching headers
- ✅ Compression enabled

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: FirebaseExtended/action-hosting-deploy@v0
      with:
        repoToken: '${{ secrets.GITHUB_TOKEN }}'
        firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
        projectId: your-project-id
```

## Monitoring

After deployment, monitor:

1. **Performance**: Firebase Console → Performance
2. **Analytics**: Google Analytics (if configured)
3. **Errors**: Browser console and Firebase Functions logs

## SSL Certificate

Firebase automatically provides SSL certificates for:
- Default Firebase domains
- Custom domains (after verification)

## Support

For Firebase Hosting support:
- Documentation: https://firebase.google.com/docs/hosting
- Community: https://firebase.google.com/support

---

**Ready to deploy!** 🚀

Your IILM Tech Lab website will be live at:
`https://your-project-id.web.app`
