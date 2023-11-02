import { useEffect, useState } from "react";
import EducationCard from "../EducationCard/EducationCard";
const Education = () => {
  const [education, setEducation] = useState();
  useEffect(() => {
    async function educationsData() {
      const res = await fetch("http://localhost:5000/events");
      const data = await res.json();
      setEducation(data);
    }
    educationsData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-6">
      {
                education?.map((education, index) => <EducationCard key={index} educationdata = {education} />)
            }
    </div>
  );
};

export default Education;
