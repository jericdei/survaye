import DashboardLayout from '@/components/layouts/dashboard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Survey } from '@/types/models';
import { Link } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';

type SurveyListItem = Pick<
  Survey,
  'id' | 'title' | 'created_at' | 'updated_at'
>;

interface SurveysProps {
  surveys: SurveyListItem[];
}

export default function Surveys({ surveys }: SurveysProps) {
  return (
    <DashboardLayout title="Surveys">
      <SurveyList surveys={surveys} />
    </DashboardLayout>
  );
}

function SurveyList({ surveys }: SurveysProps) {
  if (surveys.length === 0) {
    return (
      <div className="grid h-80 place-items-center">
        <p>You don&apos;t have any surveys yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {surveys.map((survey) => (
        <SurveyCard key={survey.id} survey={survey} />
      ))}
    </div>
  );
}

function SurveyCard({ survey }: { survey: SurveyListItem }) {
  return (
    <Link href={route('surveys.show', survey.id)}>
      <Card className="cursor-pointer hover:bg-muted">
        <CardHeader className="font-bold">{survey.title}</CardHeader>
        <CardContent>
          <p>
            {survey.created_at &&
              formatDistanceToNow(survey.created_at, { addSuffix: true })}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
