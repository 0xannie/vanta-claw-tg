const https = require('https');

const FIGMA_FILE_KEY = 'lQLb7xGte0UEilDJA7yfSV';
const FIGMA_ACCESS_TOKEN = 'figd_tNe-kMrDht23kA-eX9Ytw-MVsjsGtalQn4UIp4Ol';

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${FIGMA_FILE_KEY}`,
  headers: {
    'X-Figma-Token': FIGMA_ACCESS_TOKEN
  }
};

console.log('Fetching Figma design system...');

const req = https.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      const figmaData = JSON.parse(data);
      console.log(`✅ Figma file loaded: ${figmaData.name || 'Unknown'}`);
      
      // Find Design System page
      if (figmaData.document && figmaData.document.children) {
        console.log('\n🔍 Pages found:');
        figmaData.document.children.forEach((page, index) => {
          console.log(`  ${index + 1}. ${page.name}`);
          
          // Look for Design System
          if (page.name && (page.name.includes('Design System') || page.name.toLowerCase().includes('design'))) {
            console.log(`\n✅ Found Design System page: ${page.name}`);
            
            // Try to find color styles
            if (page.children) {
              console.log('\n🎨 Looking for color styles...');
              page.children.forEach(child => {
                if (child.type === 'CANVAS' || child.type === 'FRAME') {
                  console.log(`- ${child.type}: ${child.name}`);
                }
              });
            }
          }
        });
      }
      
      // Save full data
      require('fs').writeFileSync('figma-full-data.json', JSON.stringify(figmaData, null, 2));
      console.log('\n✅ Full Figma data saved to figma-full-data.json');
      
    } else {
      console.log(`❌ Error: ${res.statusCode}`);
      console.log(data);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();
