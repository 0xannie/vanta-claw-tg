import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";
import { renderSEOTags } from "@/utils/seo-tags";

export default function Starchild() {
  const pageMeta = getPageMeta();
  const pageTitle = generatePageTitle("Starchild AI");

  // Get broker ID from config
  const brokerId = window.__RUNTIME_CONFIG__?.VITE_ORDERLY_BROKER_ID || "vanta_exchange";

  // Starchild iframe URL with broker ID
  const starchildUrl = `https://iamstarchild.com/?brokerId=${brokerId}`;

  return (
    <>
      {renderSEOTags(pageMeta, pageTitle)}
      <div className="starchild-container" style={{ 
        width: "100%", 
        height: "calc(100vh - 64px)", 
        border: "none" 
      }}>
        <iframe 
          src={starchildUrl}
          title="Starchild AI"
          style={{ 
            width: "100%", 
            height: "100%", 
            border: "none",
            backgroundColor: "#0A0E12"
          }}
          allow="clipboard-write"
        />
      </div>
    </>
  );
}
