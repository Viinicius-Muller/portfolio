import { redirect } from "next/navigation"
import { RESUME_FILES } from "@/lib/resume"

// The real resume is the static PDF; the old HTML page held placeholder data.
// The server can't see the UI language, so this uses the site default (pt).
export default function ResumePage() {
  redirect(RESUME_FILES.pt)
}
