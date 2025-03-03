import fs from 'fs'
import path from 'path'

const projectRoot: string = process.cwd()
const projectName: string = path.basename(projectRoot)

const siteConfigPath: string = path.join(projectRoot, 'src', 'site-config.json')
const indexAstroPath: string = path.join(
  projectRoot,
  'src',
  'pages',
  'index.astro',
)
const packageJsonPath: string = path.join(projectRoot, 'package.json')
const readmePath: string = path.join(projectRoot, 'README.md')

const siteConfigContent: string = `{
  "title": "${projectName}",
  "description": "${projectName} description",
  "image": "/og.png",
  "meta": {
    "keywords": []
  },
  "author": {
    "twitter": "@my-user"
  }
}\n`

const indexAstroContent: string = `---
import Layout from '~/layouts/Layout.astro'
---

<Layout>
  <h1>${projectName}</h1>
</Layout>
`

const readmeContent: string = `# ${projectName}\n`

try {
  // reset site-config.json
  fs.writeFileSync(siteConfigPath, siteConfigContent, 'utf8')
  // reset index.astro
  fs.writeFileSync(indexAstroPath, indexAstroContent, 'utf8')
  // change name in package.json
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    packageJson.name = projectName
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
      'utf8',
    )
  }
  fs.writeFileSync(readmePath, readmeContent, 'utf8')

  // biome-ignore lint/suspicious/noConsole: log reset
  console.log('This project is ready to develop. Happy hacking!')
} catch (error) {
  // biome-ignore lint/suspicious/noConsole: log error
  console.error(
    'Something went wrong please. Ignore this and clean the project manually.',
    error,
  )
  process.exit(1)
}
