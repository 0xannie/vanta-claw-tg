import requests
import json

# Figma API配置
FIGMA_FILE_KEY = "lQLb7xGte0UEilDJA7yfSV"
FIGMA_ACCESS_TOKEN = "figd_tNe-kMrDht23kA-eX9Ytw-MVsjsGtalQn4UIp4Ol"

# Figma API endpoint
url = f"https://api.figma.com/v1/files/{FIGMA_FILE_KEY}"
headers = {"X-Figma-Token": FIGMA_ACCESS_TOKEN}

print("Fetching Figma design system...")
response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(f"✅ Figma file loaded: {data.get('name', 'Unknown')}")
    
    # 保存完整数据
    with open("figma-data-full.json", "w") as f:
        json.dump(data, f, indent=2)
    
    # 尝试提取Design System
    if "document" in data and "children" in data["document"]:
        print("\n🔍 Looking for Design System page...")
        for page in data["document"]["children"]:
            page_name = page.get("name", "")
            print(f"- Page: {page_name}")
            if "Design System" in page_name or "design" in page_name.lower():
                print(f"✅ Found Design System page: {page_name}")
                with open("figma-design-system.json", "w") as f:
                    json.dump(page, f, indent=2)
                break
    
    print("\n✅ Figma data saved!")
else:
    print(f"❌ Error: {response.status_code}")
    print(response.text)
