"use client";
import {
  Advantages,
  HES,
  LandCargo,
  SeaCargo,
  VehicleShipment,
} from "../components";

export default function ServicePage() {
  return (
    <main className="h-full w-full bg-white">
      <Advantages />
      <LandCargo />
      <SeaCargo />
      <VehicleShipment />
      <HES />
    </main>
  );
}
