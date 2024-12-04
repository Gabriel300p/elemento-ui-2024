import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

export const Email = ({}: VercelInviteUserEmailProps) => {
  const previewText = `Economize 10% no UI Kit Elemento UI - Lançamento em breve`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://fkfuqysgdoasjtyzqlyd.supabase.co/storage/v1/object/sign/elementoui-images/logo-elementoui.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlbGVtZW50b3VpLWltYWdlcy9sb2dvLWVsZW1lbnRvdWkucG5nIiwiaWF0IjoxNjc5OTIyOTYxLCJleHAiOjE3MTE0NTg5NjF9.XjfplzWXr9RFt9PhrVFYo2-rEVL2re_OKJPIemYKPfI&t=2023-03-27T13%3A15%3A06.005Z"
                width="40"
                height="40"
                alt="Elemento UI Logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-medium text-center p-0 my-[30px] mx-0">
              Economize 10% no UI Kit Elemento UI - Lançamento em breve
            </Heading>
            {/* <Text className="text-black text-[14px] leading-[24px]">
              Olá, tudo bem?
            </Text> */}
            <Text className="text-black text-[14px] leading-[24px] text-center">
              O UI Kit Elemento UI está quase pronto para ser lançado e queremos
              oferecer a você um desconto exclusivo de 10% para experimentar o
              produto assim que ele estiver disponível.
            </Text>
            <Section className="bg-emerald-600 px-10 py-3 my-4 text-neutral-50 font-bold text-base text-center  w-fit">
              ELEMTEN
            </Section>
            <Text className="text-black text-[14px] leading-[24px] text-center">
              Este é um kit de interface do usuário inovador que pode ajudar
              você a economizar tempo e criar designs mais intuitivos e
              agradáveis ​​ao usuário.
            </Text>
            <Section className="px-5 py-3 gap-10 w-full my-0 mx-auto">
              <Row>
                <Column>
                  <Link href="twitter.com/elementoui" className="">
                    <Img
                      src="https://fkfuqysgdoasjtyzqlyd.supabase.co/storage/v1/object/sign/elementoui-images/twitter-icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlbGVtZW50b3VpLWltYWdlcy90d2l0dGVyLWljb24ucG5nIiwiaWF0IjoxNjc5OTIyOTM1LCJleHAiOjE3MTE0NTg5MzV9.rb0_kTCqv6YgDI6-7iqLknshHy71GgkdKETLZPB4tK8&t=2023-03-27T13%3A14%3A39.759Z"
                      alt="Logo Twitter"
                      className="my-0 mx-auto px-3 w-7 h-7 "
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="instagram.com/elementoui">
                    <Img
                      src="https://fkfuqysgdoasjtyzqlyd.supabase.co/storage/v1/object/sign/elementoui-images/instagram-icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlbGVtZW50b3VpLWltYWdlcy9pbnN0YWdyYW0taWNvbi5wbmciLCJpYXQiOjE2Nzk5MjMzMjksImV4cCI6MTcxMTQ1OTMyOX0.rH0AE3FSrrsNhdRcOIKVjJ3tGXpTssbNa41vY802UJs&t=2023-03-27T13%3A21%3A14.234Z"
                      alt="Logo Instagram"
                      className="my-0 mx-auto px-3 w-7 h-7 "
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="youtube.com/@elementoui">
                    <Img
                      src="https://fkfuqysgdoasjtyzqlyd.supabase.co/storage/v1/object/sign/elementoui-images/youtube-icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlbGVtZW50b3VpLWltYWdlcy95b3V0dWJlLWljb24ucG5nIiwiaWF0IjoxNjc5OTIzMzU5LCJleHAiOjE3MTE0NTkzNTl9.B8en3ebg_CBTMGWGpidq0kRCHnunszwg6KW4I58JhYA&t=2023-03-27T13%3A21%3A44.650Z"
                      alt="Logo Instagram"
                      className="my-0 mx-auto px-3 w-7 h-7 "
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="dribbble.com/elementoui">
                    <Img
                      src="https://fkfuqysgdoasjtyzqlyd.supabase.co/storage/v1/object/sign/elementoui-images/dribbble-icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlbGVtZW50b3VpLWltYWdlcy9kcmliYmJsZS1pY29uLnBuZyIsImlhdCI6MTY3OTkyMzM5NCwiZXhwIjoxNzExNDU5Mzk0fQ.ivKk--iSaPz_fc9uItZMSBX1g3rRwTO-ntc9z4-Vtoc&t=2023-03-27T13%3A22%3A19.531Z"
                      alt="Logo Instagram"
                      className="my-0 mx-auto px-3 w-7 h-7 "
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="behance.com/elementoui">
                    <Img
                      src="https://fkfuqysgdoasjtyzqlyd.supabase.co/storage/v1/object/sign/elementoui-images/behance-icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlbGVtZW50b3VpLWltYWdlcy9iZWhhbmNlLWljb24ucG5nIiwiaWF0IjoxNjc5OTIzNDE4LCJleHAiOjE3MTE0NTk0MTh9.r2VcebGa_lgBHLqBQtyT3i4dZ73sRY3Cxz1xWFpP8n0&t=2023-03-27T13%3A22%3A43.176Z"
                      alt="Logo Instagram"
                      className="my-0 mx-auto px-3 w-7 h-7 "
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="linkedin.com/elementoui">
                    <Img
                      src="https://fkfuqysgdoasjtyzqlyd.supabase.co/storage/v1/object/sign/elementoui-images/linkedin-icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJlbGVtZW50b3VpLWltYWdlcy9saW5rZWRpbi1pY29uLnBuZyIsImlhdCI6MTY3OTkyMzQzOCwiZXhwIjoxNzExNDU5NDM4fQ.u_mVtO1UEjelmhYnNbaKXfyrMTKRQx-fzDo_pygFUDc&t=2023-03-27T13%3A23%3A02.941Z"
                      alt="Logo Instagram"
                      className="my-0 mx-auto px-3 w-7 h-7 "
                    />
                  </Link>
                </Column>
              </Row>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-neutral-600 text-sm leading-[24px] text-center">
              Atenciosamente, Elemento UI
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
