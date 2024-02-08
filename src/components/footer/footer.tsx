import { Separator } from "@/components/ui/separator";
import FooterIcon from "@/components/footer/footerIcon";

function Footer() {
  const githubLink = "https://github.com/GiovanniMenon";
  const instagramLink = "";
  const linkedinLink = "https://www.linkedin.com/in/giovanni-menon/";

  return (
    <div className="w-full flex flex-col gap-5 text-sm pt-10 md:pt-0">
      <Separator />
      <div className="w-full flex flex-row justify-between px-1">
        <p>Giovanni Menon</p>
        <div className="flex flex-row gap-3.5">
          <FooterIcon link={githubLink}>
            <svg
              className="with-icon_icon__MHUeb"
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              style={{
                color: "var(--geist-foreground)",
                width: "18px",
                height: "18px",
              }}
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44
                         5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09
                          1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009
                           18.13V22"
              />
            </svg>
          </FooterIcon>
          <FooterIcon link={instagramLink}>
            <svg
              className="with-icon_icon__MHUeb"
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              style={{
                color: "var(--geist-foreground)",
                width: "18px",
                height: "18px",
              }}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </FooterIcon>
          <FooterIcon link={linkedinLink}>
            <svg
              className="with-icon_icon__MHUeb"
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              style={{
                color: "var(--geist-foreground)",
                width: "18px",
                height: "18px",
              }}
            >
              <path
                fill="var(--geist-fill)"
                stroke="var(--geist-fill)"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
              />
              <path
                fill="var(--geist-fill)"
                stroke="var(--geist-fill)"
                d="M2 9h4v12H2z"
              />
              <circle
                stroke="var(--geist-fill)"
                fill="var(--geist-fill)"
                cx="4"
                cy="4"
                r="2"
              />
            </svg>
          </FooterIcon>
        </div>
      </div>
    </div>
  );
}

export default Footer;
