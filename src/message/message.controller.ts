import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  UseGuards,
} from "@nestjs/common";
import { MessageService } from "./message.service";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("mensagem")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.messageService.findAll();
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(+id, updateMessageDto);
  }
}
