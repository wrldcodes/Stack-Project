import { TestPage } from "../pages/TestPage"
export function ShoeProduct({Title, Image, Price}){
               
    return(
        <a href="#" class="group block overflow-hidden">
        <div class="relative h-[350px] sm:h-[450px]">
          <img
            src= {Image}
            alt=""
            class="absolute inset-0 h-full w-50% object-cover opacity-100 group-hover:opacity-0"
          />
      
          <img
            src= {Image}
            alt=""
            class="absolute inset-0 h-full w-50% object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
      
        <div class="relative  pt-3">
          <h3 class="text-sm  group-hover:underline group-hover:underline-offset-4">
            {Title}
          </h3>
      
          <div class="mt-1.5 flex items-center justify-between ">
            <p>{Price}</p>
      
    
          </div>
        </div>
      </a>
    )
}