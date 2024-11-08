import DashboardLayout from '@/components/layouts/dashboard';
import { Survey } from '@/types/models';

interface ShowSurveyProps {
  survey: Survey;
}

export default function ShowSurvey({ survey }: ShowSurveyProps) {
  return (
    <DashboardLayout title={survey.title}>
      <div className="space-y-8">
        <h1>{survey.title}</h1>
        <QuestionList sections={survey.questions} />
      </div>
    </DashboardLayout>
  );
}

function QuestionList({ sections }: { sections: Survey['questions'] }) {
  return (
    <ul className="space-y-4">
      {sections.map((questions) => (
        <li className="pl-4" key={questions[0].id}>
          <ol className="list-decimal">
            {questions.map((question) => (
              <li key={question.id}>
                <p className="font-bold">{question.title}</p>

                {question.options && (
                  <ul className="list-disc pl-4">
                    {question.options.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ul>
  );
}
