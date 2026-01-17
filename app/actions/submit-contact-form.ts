"use server";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate the required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }

    // Simulate form submission
    console.log("Contact form submitted:", {
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    });

    // In a real app without Sanity, you'd send an email or save to a DB here.
    // For now, we just return success.

    return {
      success: true,
      data: {
        _id: "mock-id",
        name,
        email,
        subject,
        message,
      },
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Failed to submit the form. Please try again later.",
    };
  }
}
