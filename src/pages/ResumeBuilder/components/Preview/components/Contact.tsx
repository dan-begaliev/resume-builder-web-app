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
      value: resumeData.contact.phone.value,
      label: "Phone",
    },
    {
      icon: <EnvelopeClosedIcon />,
      value: resumeData.contact.email.value,
      label: "Email",
    },
    {
      icon: <SewingPinIcon />,
      value: resumeData.contact.address.value,
      label: "Address",
    },
    {
      icon: <LinkedInLogoIcon />,
      value: resumeData.contact.website.value,
      label: "Website",
    },
  ];

  return (
    <div>
      <div
        className="text-3xl p-10 flex flex-col items-center bg-cyan-800 font-bold"
        style={{ color: "white" }}
      >
        Daniiar Begaliev
        {resumeData.contact.firstname.value} {resumeData.contact.lastname.value}
        <div style={{ color: "black" }} className="text-xl italic mt-2">
          Frontend Developer{resumeData.contact.position.value}
        </div>
      </div>

      <div className="divide flex flex-row">
        <div className="w-1/3 h-dvh flex flex-col items-center bg-[#EEE7E1] p-7">
          <div className="">
            <div className="text-l font-bold">
              <p className="mb-2">CONTACT</p>
              {contactDetails.map((el, index) =>
                el.value ? (
                  <p
                    key={index}
                    className="flex flex-row items-center p-3 gap-2"
                  >
                    {el.icon} {el.value}
                  </p>
                ) : null
              )}
            </div>
          </div>
        </div>
        <div className="w-2/3 h-dvh">
          <section title="contact-details"></section>
          <section title="skills"></section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
