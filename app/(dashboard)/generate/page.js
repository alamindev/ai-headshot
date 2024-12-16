'use client'
import Header from "@/components/Generate/Header";
import StepBuilder from "@/components/Generate/StepBuilder";
import Welcome from "@/components/Generate/Welcome";
import { useEffect, useState } from "react";
const steps = [
    {
      question: "What's your gender?",
      options: [
        { label: 'Man', image: '/images/steps/man.webp', showImage: true, showColor: false },
        { label: 'Woman', image: '/images/steps/woman.webp', showImage: true, showColor: false },
        { label: 'Non-Binary', image: '/images/steps/non-binary.png', showImage: true, showColor: false },
      ],
      default: 'Man',  // Default option
    },
    {
      question: 'How old are you?',
      options: [
        { label: '18-20', showImage: false, showColor: false,  },
        { label: '21-24', showImage: false, showColor: false,  },
        { label: '25-29', showImage: false, showColor: false,  },
        { label: '30-40', showImage: false, showColor: false,   },
        { label: '41-50', showImage: false, showColor: false,   },
        { label: '51-65', showImage: false, showColor: false,   },
        { label: '65+', showImage: false, showColor: false,   },
      ],
      default: '21-24',  // Default option
    },
    {
      question: "What's your hair color?",
      options: [
        { label: 'Brown', showImage: false, showColor: true, color: '#5A3825' },
        { label: 'Black', showImage: false, showColor: true, color: '#000' },
        { label: 'Blonde', showImage: false, showColor: true, color: '#FBE7A1' },
        { label: 'Gray', showImage: false, showColor: true, color: '#D3D3D3' },
        { label: 'Auburn', showImage: false, showColor: true, color: '#79351F' },
        { label: 'Red', showImage: false, showColor: true, color: '#E35C29' },
        { label: 'White', showImage: false, showColor: true, color: '#fff' },
        { label: 'Other', showImage: false, showColor: true, color: '#FBFAFD' },
        { label: 'Bald', showImage: true,  image: '/images/steps/non.png',  showColor: false,  },
      ],
      default: 'Brown',  // Default option
    },
    {
        question: "What's your ethnicity?",
        options: [
          { label: 'White / Caucasian', showImage: false, showColor: false },
          { label: 'Black/of African descent', showImage: false, showColor: false },
          { label: 'East or Central Asian', showImage: false, showColor: false },
          { label: 'Hispanic, Latino, Spanish origin', showImage: false, showColor: false },
          { label: 'Middle Eastern, North African, or Arab', showImage: false, showColor: false },
          { label: 'Multiracial', showImage: false, showColor: false },
          { label: 'Native Hawaiian or other Pacific Islander', showImage: false, showColor: false },
          { label: 'Southeast Asian (Vietnamese, Cambodian, etc.) ', showImage: false, showColor: false },
          { label: 'South Asian (Indian, Pakistani, Bangladeshi, etc.)', showImage: false, showColor: false },
          { label: 'Other', showImage: false, showColor: false },
        ],
        default: 'East or Central Asian', // Default selected option
      },
  ];
  
export default function page() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isStepStart, setIsStepStart] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});
  
    // Set the default selected option for each step using the 'default' field
    useEffect(() => {
        const defaultSelectedOptions = {};
        steps.forEach((step) => {
          defaultSelectedOptions[step.question] = step.options.find(option => option.label === step.default); // Find the default object
        });
        setSelectedOptions(defaultSelectedOptions);
      }, []);
    
      const handleOptionSelect = (label) => {
        const selectedOption = steps[currentStep].options.find(option => option.label === label);
        setSelectedOptions({
          ...selectedOptions,
          [steps[currentStep].question]: selectedOption,
        });
      };
  
    useEffect(() => {
        if (isStepStart)
            setCurrentStep(currentStep );
      }, [isStepStart]);
 
  
      const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      };

  return (
      <div className="">
          <Header currentStep={currentStep + 1} totalSteps={steps.length} />
          {
              isStepStart ?  <StepBuilder setIsStepStart={setIsStepStart} setCurrentStep={setCurrentStep} steps={steps} selectedOptions={selectedOptions} currentStep={currentStep} handleOptionSelect={handleOptionSelect}  handleNextStep={handleNextStep}/> :  <Welcome setIsStepStart={setIsStepStart} />
          }
        
    </div>
  )
}
