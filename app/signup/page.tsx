// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Link from "next/link"

// export default function SignUpPage() {
//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <Link href="/" className="inline-flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
//               <span className="text-primary-foreground font-serif font-black text-xl">ॐ</span>
//             </div>
//             <div className="text-left">
//               <h1 className="font-serif font-black text-xl text-primary">Brahman Samaj</h1>
//               <p className="text-sm text-muted-foreground">Parshuram Sena</p>
//             </div>
//           </Link>
//         </div>

//         <Card className="border-border/50 shadow-lg">
//           <CardHeader className="text-center">
//             <CardTitle className="font-serif font-black text-2xl text-primary">Join Our Community</CardTitle>
//             <CardDescription>Create your account to connect with fellow members</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <form className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName" className="font-medium">
//                     First Name
//                   </Label>
//                   <Input
//                     id="firstName"
//                     type="text"
//                     placeholder="First name"
//                     className="border-border focus:ring-primary focus:border-primary"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="lastName" className="font-medium">
//                     Last Name
//                   </Label>
//                   <Input
//                     id="lastName"
//                     type="text"
//                     placeholder="Last name"
//                     className="border-border focus:ring-primary focus:border-primary"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email" className="font-medium">
//                   Email Address
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="border-border focus:ring-primary focus:border-primary"
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="phone" className="font-medium">
//                   Phone Number
//                 </Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   className="border-border focus:ring-primary focus:border-primary"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="state" className="font-medium">
//                     State
//                   </Label>
//                   <Select>
//                     <SelectTrigger className="border-border focus:ring-primary focus:border-primary">
//                       <SelectValue placeholder="Select state" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="maharashtra">Maharashtra</SelectItem>
//                       <SelectItem value="gujarat">Gujarat</SelectItem>
//                       <SelectItem value="rajasthan">Rajasthan</SelectItem>
//                       <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
//                       <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
//                       <SelectItem value="bihar">Bihar</SelectItem>
//                       <SelectItem value="west-bengal">West Bengal</SelectItem>
//                       <SelectItem value="karnataka">Karnataka</SelectItem>
//                       <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
//                       <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="district" className="font-medium">
//                     District
//                   </Label>
//                   <Select>
//                     <SelectTrigger className="border-border focus:ring-primary focus:border-primary">
//                       <SelectValue placeholder="Select district" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="mumbai">Mumbai</SelectItem>
//                       <SelectItem value="pune">Pune</SelectItem>
//                       <SelectItem value="nagpur">Nagpur</SelectItem>
//                       <SelectItem value="nashik">Nashik</SelectItem>
//                       <SelectItem value="aurangabad">Aurangabad</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password" className="font-medium">
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Create a password"
//                   className="border-border focus:ring-primary focus:border-primary"
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword" className="font-medium">
//                   Confirm Password
//                 </Label>
//                 <Input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Confirm your password"
//                   className="border-border focus:ring-primary focus:border-primary"
//                   required
//                 />
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input
//                   id="terms"
//                   type="checkbox"
//                   className="rounded border-border text-primary focus:ring-primary"
//                   required
//                 />
//                 <Label htmlFor="terms" className="text-sm text-muted-foreground">
//                   I agree to the{" "}
//                   <Link href="/terms" className="text-primary hover:text-accent transition-colors">
//                     Terms of Service
//                   </Link>{" "}
//                   and{" "}
//                   <Link href="/privacy" className="text-primary hover:text-accent transition-colors">
//                     Privacy Policy
//                   </Link>
//                 </Label>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2 transition-all transform hover:scale-105"
//               >
//                 Create Account
//               </Button>
//             </form>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t border-border" />
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-background px-2 text-muted-foreground">Or</span>
//               </div>
//             </div>

//             <div className="text-center">
//               <p className="text-sm text-muted-foreground">
//                 Already have an account?{" "}
//                 <Link href="/signin" className="text-primary hover:text-accent font-medium transition-colors">
//                   Sign in here
//                 </Link>
//               </p>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="text-center mt-6">
//           <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//             ← Back to homepage
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";
import { useState } from "react";

export default function MembershipForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // भाग 1
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    age: "",
    gender: "",
    maritalStatus: "",
    spouseName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    permanentAddress: "",
    currentAddress: "",

    // भाग 2
    highschool: { subject: "", institute: "", year: "" },
    higherSecondary: { subject: "", institute: "", year: "" },
    graduation: { subject: "", institute: "", year: "" },
    postGraduation: { subject: "", institute: "", year: "" },

    // भाग 3
    profession: "",
    companyName: "",
    annualIncome: "",
    employmentStatus: "",

    // भाग 4
    family: [
      { name: "", relation: "", age: "", education: "", profession: "", mobile: "" },
      { name: "", relation: "", age: "", education: "", profession: "", mobile: "" },
      { name: "", relation: "", age: "", education: "", profession: "", mobile: "" },
      { name: "", relation: "", age: "", education: "", profession: "", mobile: "" },
      { name: "", relation: "", age: "", education: "", profession: "", mobile: "" },
    ],

    // भाग 5
    otherOrg: "",
    otherOrgName: "",
    familySocialWork: "",
    agreeRules: "",
    joinPurpose: "",

    // भाग 6
    aadhar: "",
    voterId: "",
    otherId: "",
    declarationName: "",
    date: "",
    place: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (level: string, field: string, value: string) => {
   setFormData((prev) => ({
  ...prev,
  [level]: {
    ...(prev[level] || {}), // agar undefined hai to empty object
    [field]: value,
  },
}));

  };

  const handleFamilyChange = (index: number, field: string, value: string) => {
    const updated = [...formData.family];
    updated[index][field as keyof typeof updated[0]] = value;
    setFormData((prev) => ({ ...prev, family: updated }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("📌 Submitted Data:", formData);
    alert("✅ फॉर्म सफलतापूर्वक सबमिट हो गया!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-2">
        परशुराम सेवा मध्य प्रदेश – सदस्यता आवेदन पत्र
      </h1>
      <p className="text-center mb-6 text-gray-600">(केवल ब्राह्मण समाज हेतु)</p>

      <form onSubmit={handleSubmit}>
        {/* भाग 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-lg font-bold mb-4">भाग-1 : व्यक्तिगत विवरण</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="fullName" placeholder="पूरा नाम (आवेदक)" value={formData.fullName} onChange={handleChange} className="border p-2 rounded" />
              <input name="fatherName" placeholder="पिता का नाम" value={formData.fatherName} onChange={handleChange} className="border p-2 rounded" />
              <input name="motherName" placeholder="माता का नाम" value={formData.motherName} onChange={handleChange} className="border p-2 rounded" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2 rounded" />
              <input name="age" placeholder="आयु (वर्ष)" value={formData.age} onChange={handleChange} className="border p-2 rounded" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
                <option value="">लिंग चुनें</option>
                <option value="पुरुष">पुरुष</option>
                <option value="महिला">महिला</option>
                <option value="अन्य">अन्य</option>
              </select>
              <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="border p-2 rounded">
                <option value="">वैवाहिक स्थिति</option>
                <option value="विवाहित">विवाहित</option>
                <option value="अविवाहित">अविवाहित</option>
              </select>
              <input name="spouseName" placeholder="पति/पत्नी का नाम" value={formData.spouseName} onChange={handleChange} className="border p-2 rounded" />
              <input name="mobile" placeholder="मोबाइल नंबर" value={formData.mobile} onChange={handleChange} className="border p-2 rounded" />
              <input name="whatsapp" placeholder="व्हाट्सऐप नंबर" value={formData.whatsapp} onChange={handleChange} className="border p-2 rounded" />
              <input type="email" name="email" placeholder="ई-मेल" value={formData.email} onChange={handleChange} className="border p-2 rounded" />
              <textarea name="permanentAddress" placeholder="स्थायी पता" value={formData.permanentAddress} onChange={handleChange} className="border p-2 rounded" />
              <textarea name="currentAddress" placeholder="वर्तमान पता" value={formData.currentAddress} onChange={handleChange} className="border p-2 rounded" />
            </div>
          </div>
        )}

        {/* भाग 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-lg font-bold mb-4">भाग-2 : शैक्षणिक विवरण</h2>
            {["highschool", "higherSecondary", "graduation", "postGraduation"].map((level, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-4 mb-4">
                <input placeholder="विषय/स्ट्रीम" value={formData[level].subject} onChange={(e) => handleEducationChange(level, "subject", e.target.value)} className="border p-2 rounded" />
                <input placeholder="संस्था/कॉलेज का नाम" value={formData[level].institute} onChange={(e) => handleEducationChange(level, "institute", e.target.value)} className="border p-2 rounded" />
                <input placeholder="वर्ष" value={formData[level].year} onChange={(e) => handleEducationChange(level, "year", e.target.value)} className="border p-2 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* भाग 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-lg font-bold mb-4">भाग-3 : व्यवसायिक विवरण</h2>
            <input name="profession" placeholder="वर्तमान पेशा / व्यवसाय" value={formData.profession} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <input name="companyName" placeholder="संस्थान/कंपनी का नाम" value={formData.companyName} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <input name="annualIncome" placeholder="वार्षिक आय (₹)" value={formData.annualIncome} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className="border p-2 rounded w-full">
              <option value="">रोजगार की स्थिति</option>
              <option value="सरकारी">सरकारी</option>
              <option value="निजी">निजी</option>
              <option value="स्वरोजगार">स्वरोजगार</option>
              <option value="बेरोजगार">बेरोजगार</option>
            </select>
          </div>
        )}

        {/* भाग 4 */}
        {step === 4 && (
          <div>
            <h2 className="text-lg font-bold mb-4">भाग-4 : पारिवारिक विवरण</h2>
            {formData.family.map((member, idx) => (
              <div key={idx} className="grid grid-cols-6 gap-2 mb-2">
                <input placeholder="नाम" value={member.name} onChange={(e) => handleFamilyChange(idx, "name", e.target.value)} className="border p-2 rounded" />
                <input placeholder="संबंध" value={member.relation} onChange={(e) => handleFamilyChange(idx, "relation", e.target.value)} className="border p-2 rounded" />
                <input placeholder="आयु" value={member.age} onChange={(e) => handleFamilyChange(idx, "age", e.target.value)} className="border p-2 rounded" />
                <input placeholder="शिक्षा" value={member.education} onChange={(e) => handleFamilyChange(idx, "education", e.target.value)} className="border p-2 rounded" />
                <input placeholder="व्यवसाय" value={member.profession} onChange={(e) => handleFamilyChange(idx, "profession", e.target.value)} className="border p-2 rounded" />
                <input placeholder="मोबाइल" value={member.mobile} onChange={(e) => handleFamilyChange(idx, "mobile", e.target.value)} className="border p-2 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* भाग 5 */}
        {step === 5 && (
          <div>
            <h2 className="text-lg font-bold mb-4">भाग-5 : सामाजिक एवं संगठनात्मक विवरण</h2>
            <div className="mb-4">
              <label className="block mb-1">क्या आप किसी अन्य सामाजिक/धार्मिक संगठन से जुड़े हैं?</label>
              <select name="otherOrg" value={formData.otherOrg} onChange={handleChange} className="border p-2 rounded w-full">
                <option value="">चुनें</option>
                <option value="हाँ">हाँ</option>
                <option value="नहीं">नहीं</option>
              </select>
              {formData.otherOrg === "हाँ" && (
                <input name="otherOrgName" placeholder="संगठन का नाम" value={formData.otherOrgName} onChange={handleChange} className="border p-2 rounded w-full mt-2" />
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">क्या आपके परिवार में कोई सामाजिक कार्य में सक्रिय है?</label>
              <select name="familySocialWork" value={formData.familySocialWork} onChange={handleChange} className="border p-2 rounded w-full">
                <option value="">चुनें</option>
                <option value="हाँ">हाँ</option>
                <option value="नहीं">नहीं</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">क्या आप नियम एवं संविधान का पालन करेंगे?</label>
              <select name="agreeRules" value={formData.agreeRules} onChange={handleChange} className="border p-2 rounded w-full">
                <option value="">चुनें</option>
                <option value="हाँ">हाँ</option>
                <option value="नहीं">नहीं</option>
              </select>
            </div>
            <textarea name="joinPurpose" placeholder="संगठन में जुड़ने का उद्देश्य" value={formData.joinPurpose} onChange={handleChange} className="border p-2 rounded w-full" />
          </div>
        )}

        {/* भाग 6 */}
        {step === 6 && (
          <div>
            <h2 className="text-lg font-bold mb-4">भाग-6 : पहचान पत्र विवरण एवं घोषणा</h2>
            <input name="aadhar" placeholder="आधार कार्ड नंबर" value={formData.aadhar} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <input name="voterId" placeholder="मतदाता पहचान पत्र नंबर" value={formData.voterId} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <input name="otherId" placeholder="अन्य पहचान" value={formData.otherId} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <input name="declarationName" placeholder="घोषणा हेतु नाम" value={formData.declarationName} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
            <input name="place" placeholder="स्थान" value={formData.place} onChange={handleChange} className="border p-2 rounded w-full mb-4" />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">पिछला</button>}
          {step < 6 && <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">अगला</button>}
          {step === 6 && <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">सबमिट</button>}
        </div>
      </form>
    </div>
  );
}
