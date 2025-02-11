import PropTypes from "prop-types";
import { Calendar, Clock, BookOpen, User, MapPin, Pin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { dayColors } from "@/config/scheduleData";

export function ScheduleCard({ item, isPinned, onTogglePin }) {
  return (
    <Card
      className={`${
        dayColors[item.day]
      } overflow-hidden relative transform transition-all duration-300 ease-in-out ${
        isPinned ? "scale-[1.02] shadow-lg" : ""
      }`}
    >
      {item.group === "KELAS PILIHAN" && (
        <button
          onClick={() => onTogglePin(item.id)}
          className="absolute top-2 right-2 p-1 hover:bg-black/5 rounded-full transition-colors"
          title={isPinned ? "Lepas pin matkul" : "Pin matkul"}
        >
          <Pin
            className={`h-4 w-4 transition-transform duration-300 ${
              isPinned
                ? "rotate-[405deg]"
                : "rotate-45 opacity-50 hover:opacity-100"
            }`}
          />
        </button>
      )}
      <CardContent className="p-4">
        <div className="flex flex-col gap-2 mb-3">
          <h3 className="text-lg font-semibold leading-tight">{item.subject}</h3>
          <div className="flex items-center gap-1 whitespace-nowrap">
            {item.session && (
              <span className="text-sm font-medium bg-white/80 px-1.5 py-0.5 rounded">
                {item.session}
              </span>
            )}
            <span className="text-sm font-medium bg-white/80 px-1.5 py-0.5 rounded">
              {item.code}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {item.day}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {item.time}
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            {item.credits} SKS
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            {item.room}
          </div>
          <div className="col-span-2 flex items-center">
            <User className="mr-2 h-4 w-4" />
            {item.lecturer}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

ScheduleCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    lecturer: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    session: PropTypes.string,
  }).isRequired,
  isPinned: PropTypes.bool.isRequired,
  onTogglePin: PropTypes.func.isRequired,
};
