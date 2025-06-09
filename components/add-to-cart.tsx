import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function AddToCart() {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="rounded-full relative cursor-pointer "
    >
      <ShoppingCart className="h-5 w-5" />
      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-amber-700 text-xs flex items-center justify-center p-0">
        0
      </Badge>
    </Button>
  );
}
