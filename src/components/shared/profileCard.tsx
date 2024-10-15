import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProfileCard = () => {
  return (
    <Card className="w-64 h-fit">
      <CardHeader>
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt="profileImage"
            className="w-14 h-14 rounded-full"
          />
          <div className="">
            <p className="text-lg font-medium ">Sushil Pundkar</p>
            <p className="text-sm font-medium text-gray-600">Rank</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
