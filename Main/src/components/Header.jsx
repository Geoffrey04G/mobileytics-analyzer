import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";

export default function Header() {
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            backgroundColor: "#1f3a93",
            color: "#fff",
            padding: "0 2rem"
          }
        }
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <span style={{ fontWeight: "bold", fontSize: "1.25rem", color: "#fff" }}>
            Mobileytics Analyzer
          </span>
        </StyledNavigationItem>
      </StyledNavigationList>

      <StyledNavigationList $align={ALIGN.center}>
        {["Features", "Pricing", "Resources", "Blog"].map((item) => (
          <StyledNavigationItem key={item}>
            <StyledLink
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                margin: "0 1rem"
              }}
            >
              {item}
            </StyledLink>
          </StyledNavigationItem>
        ))}
      </StyledNavigationList>

      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button
            kind="tertiary"
            overrides={{
              BaseButton: {
                style: {
                  color: "#fff"
                }
              }
            }}
          >
            Log In
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button
            kind="primary"
            overrides={{
              BaseButton: {
                style: {
                  backgroundColor: "#4da6ff"
                }
              }
            }}
          >
            Get Started for Free
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}
