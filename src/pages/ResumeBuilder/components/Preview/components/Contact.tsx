import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  MobileIcon,
  SewingPinIcon,
} from "@radix-ui/react-icons";

interface ContactDetail {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function Contact() {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;
  const contactDetails: ContactDetail[] = [
    {
      icon: <MobileIcon />,
      value: `${resumeData.contact.phone.value}`,
      label: "Phone",
    },
    {
      icon: <EnvelopeClosedIcon />,
      value: `${resumeData.contact.email.value}`,
      label: "Email",
    },
    {
      icon: <SewingPinIcon />,
      value: `${resumeData.contact.address.value}`,
      label: "Address",
    },
    {
      icon: <LinkedInLogoIcon />,
      value: `${resumeData.contact.website.value}`,
      label: "Website",
    },
  ];

  return (
    <div>
      {contactDetails.map((el, index) =>
        el.value ? (
          <p key={index} className="flex items-center p-1 gap-2 font-normal">
            {el.icon} {el.value}
          </p>
        ) : null
      )}
    </div>
  );
}

export default Contact;
